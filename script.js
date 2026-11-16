
/* MOBILE NAVIGATION MENU */

let menuButton = document.getElementById("menuButton");
let navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function() {

    navLinks.classList.toggle("show");

});

