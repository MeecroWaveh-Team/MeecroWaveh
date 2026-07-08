
const toggleBtn = document.getElementById("theme");

const savedTheme = localStorage.getItem("theme");

if (savedTheme == "dark") {
    document.body.classList.add("dark");
}
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    let theme = "light"

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "Light Mode";
        theme = "dark"
    } else {
        toggleBtn.textContent = "Dark Mode";
        theme = "light"
    }

    localStorage.setItem("theme", theme)
});