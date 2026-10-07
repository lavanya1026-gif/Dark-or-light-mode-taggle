const button = document.getElementById("themeButton");

function toggleTheme() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        button.textContent = "☀️ Light Mode";

        localStorage.setItem("theme", "dark");

    } else {

        button.textContent = "🌙 Dark Mode";

        localStorage.setItem("theme", "light");
    }
}


// Load saved theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    button.textContent = "☀️ Light Mode";
}