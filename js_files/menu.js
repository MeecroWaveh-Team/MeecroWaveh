const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger?.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (
        !mobileMenu.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        mobileMenu.classList.remove("show");
    }
});