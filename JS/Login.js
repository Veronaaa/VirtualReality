
/* SHOW AND HIDE PASSWORD */

let passwordInput = document.getElementById("password");
let showPassword = document.getElementById("showPassword");

showPassword.addEventListener("click", function() {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        showPassword.textContent = "Hide";

    } else {

        passwordInput.type = "password";
        showPassword.textContent = "Show";

    }

});


/* LOGIN FORM */

let loginForm = document.getElementById("loginForm");
let loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    loginMessage.textContent = "Login form submitted successfully!";

});
