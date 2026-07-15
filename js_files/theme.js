const themeButtons = [
    document.getElementById("theme"),
    document.getElementById("theme-mobile")
].filter(Boolean);

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}

function updateButtons() {
    const isDark = document.body.classList.contains("dark");

    themeButtons.forEach(button => {
        button.textContent = isDark
            ? "Light Mode"
            : "Dark Mode";
    });
}

updateButtons();


function toggleTheme() {
    document.body.classList.toggle("dark");

    const theme = document.body.classList.contains("dark")
        ? "dark"
        : "light";

    localStorage.setItem("theme", theme);

    updateButtons();
}

themeButtons.forEach(button => {
    button.addEventListener("click", toggleTheme);
});