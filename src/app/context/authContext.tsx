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
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { uploadToCloudinary } from "../../modules/uploadImage.js"; // Importe a função que criamos

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
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

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

  const signUp = async (
    nome: string,
    email: string,
    password: string,
    foto: File | null,
  ) => {
    try {
      // 1. Cria a conta no Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const userCreated = userCredential.user;

      let photoURL = "";

      // 2. Se houver foto selecionada, envia para o Cloudinary
      if (foto) {
        photoURL = await uploadToCloudinary(foto);
      }

      // 3. Atualiza o perfil no Firebase Auth com o nome e a URL da foto do Cloudinary
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
    <AuthContext.Provider value={{ user, logout, login, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
