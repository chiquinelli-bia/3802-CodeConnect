import {
  createContext,
  type ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../infra/firebase.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  linkWithCredential,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { uploadToCloudinary } from "../../modules/uploadImage";

export interface IAuthContext {
  user: User | null;
  logout: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  signUp: (
    nome: string,
    email: string,
    password: string,
    foto: File | null,
  ) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithGithub: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Login com E-mail e Senha
  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login realizado com sucesso!");
      navigate("/feed");
    } catch (error: any) {
      toast.error("Falha ao realizar login. Verifique suas credenciais.");
      console.error("Erro no login:", error);
    }
  };

  // Login com Google
  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Login com Google realizado com sucesso!");
      navigate("/feed");
    } catch (error: any) {
      toast.error("Falha ao entrar com o Google.");
      console.error("Erro no login com Google:", error);
    }
  };

  // Login com GitHub com suporte a linking de contas
  const loginWithGithub = async () => {
    try {
      const provider = new GithubAuthProvider();

      // Se já houver um usuário logado na aplicação, vincula o GitHub ao perfil existente diretamente
      if (auth.currentUser) {
        await linkWithCredential(
          auth.currentUser,
          await signInWithPopup(auth, provider).then(
            (res) => GithubAuthProvider.credentialFromResult(res)!,
          ),
        );
        toast.success("Conta do GitHub vinculada com sucesso!");
        return;
      }

      await signInWithPopup(auth, provider);
      toast.success("Login com GitHub realizado com sucesso!");
      navigate("/feed");
    } catch (error: any) {
      if (error.code === "auth/account-exists-with-different-credential") {
        const pendingCredential = GithubAuthProvider.credentialFromError(error);

        if (pendingCredential && auth.currentUser) {
          try {
            await linkWithCredential(auth.currentUser, pendingCredential);
            toast.success("Conta do GitHub vinculada ao seu perfil!");
            navigate("/feed");
            return;
          } catch (linkError) {
            console.error("Erro ao vincular conta:", linkError);
          }
        }

        toast.info(
          "Este e-mail já possui uma conta registrada. Faça login com E-mail/Senha ou Google primeiro para vincular o GitHub.",
        );
      } else if (error.code === "auth/popup-closed-by-user") {
        toast.warn("A janela de autenticação foi fechada.");
      } else {
        toast.error("Falha ao entrar com o GitHub.");
      }
      console.error("Erro no login com GitHub:", error);
    }
  };

  // Cadastro tradicional
  const signUp = async (
    nome: string,
    email: string,
    password: string,
    foto: File | null,
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const userCreated = userCredential.user;

      let photoURL = "";
      if (foto) {
        photoURL = await uploadToCloudinary(foto);
      }

      await updateProfile(userCreated, {
        displayName: nome,
        photoURL: photoURL || null,
      });

      setUser({ ...userCreated });
      toast.success("Usuário registrado com sucesso!");
      navigate("/feed");
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Este e-mail já está em uso.");
      } else {
        toast.error("Ops! Houve um problema durante o registro.");
      }
      console.error("Erro no cadastro:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const logout = useCallback(async () => {
    try {
      await signOut(auth);
      toast.info("Você saiu da conta.");
      navigate("/login");
    } catch (error: any) {
      toast.error("Erro ao encerrar a sessão.");
      console.error("Erro no logout:", error);
    }
  }, [navigate]);

  return (
    <AuthContext.Provider
      value={{ user, logout, login, signUp, loginWithGoogle, loginWithGithub }}
    >
      {children}
    </AuthContext.Provider>
  );
};
