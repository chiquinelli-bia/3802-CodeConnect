import { useEffect } from "react";

export function useFocusResponsivo() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const handleFocusIn = (e) => {
      if (
        mediaQuery.matches &&
        (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
      ) {
        const navbar = document.querySelector(".lista-links");
        if (navbar) navbar.style.display = "none";
      }
    };

    const handleFocusOut = (e) => {
      if (
        mediaQuery.matches &&
        (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
      ) {
        const navbar = document.querySelector(".lista-links");
        if (navbar) navbar.style.display = "flex";
      }
    };

    // Event delegation global seguro
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);

    // Limpeza ao desmontar o componente
    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);
}
