/* SHOW AND HIDE PASSWORD */

let passwordInput = document.getElementById("password");
let showPassword = document.getElementById("showPassword");
let showPasswordIcon = showPassword.querySelector("i");

showPassword.addEventListener("click", function() {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        showPasswordIcon.classList.remove("fa-eye");
        showPasswordIcon.classList.add("fa-eye-slash");
        showPassword.setAttribute("aria-label", "Hide password");

    } else {

        passwordInput.type = "password";
        showPasswordIcon.classList.remove("fa-eye-slash");
        showPasswordIcon.classList.add("fa-eye");
        showPassword.setAttribute("aria-label", "Show password");

    }

});


/* LOGIN FORM */

let loginForm = document.getElementById("loginForm");
let loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    loginMessage.textContent = "Login form submitted successfully!";

});


/* MOBILE NAVBAR */

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
}


/* DARK MODE AND LIGHT MODE */

let themeButton = document.getElementById("themeButton");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    if (themeButton) {
        themeButton.textContent = "☽";
    }
}

if (themeButton) {
    themeButton.addEventListener("click", function() {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            themeButton.textContent = "☽";
            localStorage.setItem("theme", "light");
        } else {
            themeButton.textContent = "☀︎";
            localStorage.setItem("theme", "dark");
        }

    });
}