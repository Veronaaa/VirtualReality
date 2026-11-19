
/* MOBILE NAVIGATION MENU */

let menuButton = document.getElementById("menuButton");
let navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function() {

    navLinks.classList.toggle("show");

});

/* DARK MODE AND LIGHT MODE */

let themeButton = document.getElementById("themeButton");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeButton.textContent = "🌙";
}

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeButton.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        themeButton.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }

});