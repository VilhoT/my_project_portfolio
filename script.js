// Toggle menu for mobile (if you have a menu toggle button)
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Update active dot
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and activate the corresponding dot
    if (slides[slideIndex - 1] && dots[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    // Change slide every 5 seconds
    setTimeout(showSlides, 2300);
}

// Optional: Add click event listeners to dots for manual navigation
let dotElements = document.getElementsByClassName("dot");
for (let i = 0; i < dotElements.length; i++) {
    dotElements[i].addEventListener("click", function () {
        slideIndex = i + 1; // Adjust index to match slide numbering
        showSlides();
    });
}