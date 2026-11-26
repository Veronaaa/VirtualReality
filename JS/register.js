
/* 1. SHOW / HIDE PASSWORD */

const passwordButtons = document.querySelectorAll(".register-password-toggle");

passwordButtons.forEach(button => {

    button.addEventListener("click", function () {

        const passwordInput = document.getElementById(this.dataset.target);
        const icon = this.querySelector("i");

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");

            button.setAttribute("aria-label", "Hide password");

        } else {

            passwordInput.type = "password";

            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");

            button.setAttribute("aria-label", "Show password");

        }

    });

});


/* 2. REGISTER FORM */

const registerForm = document.getElementById("registerForm");
const formMessage = document.getElementById("formMessage");

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {

        formMessage.textContent = "Passwords do not match.";
        return;

    }

    formMessage.textContent = "Registration form submitted successfully!";

});


/* 3. GOOGLE BUTTON */

const googleButton = document.getElementById("googleButton");

googleButton.addEventListener("click", function () {

    formMessage.textContent = "Google registration is not connected yet.";

});


/* 4. MOBILE NAVBAR */

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});



/* DARK MODE AND LIGHT MODE */

let themeButton = document.getElementById("themeButton");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeButton.textContent = "☽";
}

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
