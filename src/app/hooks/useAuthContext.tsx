import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  // Se o hook for usado fora do AuthProvider, lança uma exceção explicativa
  if (!context) {
    throw new Error("useAuthContext deve ser usado dentro de um AuthProvider");
  }

  return context;
};
