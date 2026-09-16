import { useEffect, useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../../app/hooks/useAuthContext"; // Importe o seu hook/contexto de autenticação

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuthContext(); // Ou a lógica que você usa para saber se está logado
  const location = useLocation();
  const toastExibidoRef = useRef(false);

  useEffect(() => {
    if (!loading && !user && !toastExibidoRef.current) {
      toast.warning("Você precisa estar logado para acessar esta página!", {
        toastId: "auth-required-toast", // Evita duplicar o toast se o componente re-renderizar
      });
      toastExibidoRef.current = true;
    }
  }, [user, loading]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
