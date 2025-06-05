export function setupResponsividade() {
    const inputs = document.querySelectorAll("input, textarea");
    const navbar = document.querySelector(".lista-links");
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            if (mediaQuery.matches) {
                navbar.style.display = "none";
            }
        });
        input.addEventListener("blur", () => {
            if (mediaQuery.matches) {
                navbar.style.display = "flex";
            }
        });
    });
}
