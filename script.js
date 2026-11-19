
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


/* =================================
   FAQ ACCORDION
================================= */

let faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {

    question.addEventListener("click", function() {

        let faqItem = question.parentElement;
        let answer = faqItem.querySelector(".faq-answer");

        // Close other open questions
        document.querySelectorAll(".faq-item").forEach(function(item) {

            if (item !== faqItem) {
                item.classList.remove("active");
                item.querySelector(".faq-answer").style.maxHeight = null;
            }

        });

        // Open or close the selected question
        faqItem.classList.toggle("active");

        if (faqItem.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }

    });

});


/* =================================
   REVIEW SLIDER
================================= */

let reviewsTrack = document.getElementById("reviewsTrack");
let nextReview = document.getElementById("reviewNext");
let previousReview = document.getElementById("reviewPrev");

if (reviewsTrack && nextReview && previousReview) {

    let reviewIndex = 0;
    let reviewTimer;

    function getVisibleReviews() {

        if (window.innerWidth <= 600) {
            return 1;
        } else if (window.innerWidth <= 900) {
            return 2;
        } else {
            return 3;
        }

    }

    function updateReviewSlider() {

        let cards = reviewsTrack.querySelectorAll(".review-card");
        let visibleReviews = getVisibleReviews();

        let maxIndex = Math.max(0, cards.length - visibleReviews);

        if (reviewIndex > maxIndex) {
            reviewIndex = 0;
        }

        if (cards.length > 0) {

            let cardWidth = cards[0].offsetWidth;
            let gap = 22;

            reviewsTrack.style.transform =
                "translateX(-" + (reviewIndex * (cardWidth + gap)) + "px)";

        }

    }

    function nextSlide() {

        let cards = reviewsTrack.querySelectorAll(".review-card");
        let maxIndex = Math.max(0, cards.length - getVisibleReviews());

        if (reviewIndex >= maxIndex) {
            reviewIndex = 0;
        } else {
            reviewIndex++;
        }

        updateReviewSlider();

    }

    function previousSlide() {

        let cards = reviewsTrack.querySelectorAll(".review-card");
        let maxIndex = Math.max(0, cards.length - getVisibleReviews());

        if (reviewIndex <= 0) {
            reviewIndex = maxIndex;
        } else {
            reviewIndex--;
        }

        updateReviewSlider();

    }

    function startReviewSlider() {

        clearInterval(reviewTimer);

        reviewTimer = setInterval(function() {
            nextSlide();
        }, 5000);

    }

    nextReview.addEventListener("click", function() {
        nextSlide();
        startReviewSlider();
    });

    previousReview.addEventListener("click", function() {
        previousSlide();
        startReviewSlider();
    });

    window.addEventListener("resize", updateReviewSlider);

    reviewsTrack.addEventListener("mouseenter", function() {
        clearInterval(reviewTimer);
    });

    reviewsTrack.addEventListener("mouseleave", function() {
        startReviewSlider();
    });

    updateReviewSlider();
    startReviewSlider();

}


/* =================================
   STAR RATING
================================= */

let starButtons = document.querySelectorAll(".star-rating button");
let ratingValue = document.getElementById("ratingValue");

starButtons.forEach(function(star) {

    star.addEventListener("click", function() {

        let rating = Number(star.getAttribute("data-rating"));

        ratingValue.value = rating;

        starButtons.forEach(function(button) {

            let buttonRating = Number(button.getAttribute("data-rating"));

            if (buttonRating <= rating) {
                button.classList.add("selected");
            } else {
                button.classList.remove("selected");
            }

        });

    });

});


/* =================================
   SUBMIT CUSTOMER REVIEW
================================= */

let reviewForm = document.getElementById("reviewForm");

if (reviewForm) {

    reviewForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("reviewName").value.trim();
        let comment = document.getElementById("reviewComment").value.trim();
        let rating = Number(ratingValue.value);

        if (rating === 0) {
            alert("Please select a star rating!");
            return;
        }

        if (name === "" || comment === "") {
            alert("Please complete all fields!");
            return;
        }

        // Create a new review card
        let newReview = document.createElement("article");
        newReview.classList.add("review-card");

        // Create the stars
        let stars = "★".repeat(rating) + "☆".repeat(5 - rating);

        // Create review elements
        let starElement = document.createElement("div");
        starElement.classList.add("review-stars");
        starElement.textContent = stars;

        let commentElement = document.createElement("p");
        commentElement.classList.add("review-text");
        commentElement.textContent = comment;

        let personElement = document.createElement("div");
        personElement.classList.add("review-person");

        let avatar = document.createElement("div");
        avatar.classList.add("review-avatar");
        avatar.textContent = name.charAt(0).toUpperCase();

        let personInfo = document.createElement("div");

        let personName = document.createElement("h3");
        personName.textContent = name;

        let personType = document.createElement("span");
        personType.textContent = "Customer Review";

        // Put everything together
        personInfo.appendChild(personName);
        personInfo.appendChild(personType);

        personElement.appendChild(avatar);
        personElement.appendChild(personInfo);

        newReview.appendChild(starElement);
        newReview.appendChild(commentElement);
        newReview.appendChild(personElement);

        // Add the review to the slider
        reviewsTrack.appendChild(newReview);

        window.dispatchEvent(new Event("resize"));

        reviewForm.reset();

        // Reset the stars
        ratingValue.value = 0;

        starButtons.forEach(function(button) {
            button.classList.remove("selected");
        });

        alert("Thank you for your review!");

    });

}
