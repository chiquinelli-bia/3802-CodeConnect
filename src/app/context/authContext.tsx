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
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";

export interface IAuthContext {
  user: User | null;
  logout: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Método de Login com Toast e Redirecionamento
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Método de Logout com Toast e Redirecionamento
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
    <AuthContext.Provider value={{ user, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};
