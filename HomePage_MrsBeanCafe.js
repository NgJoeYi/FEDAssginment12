let slideIndex = 1;
showSlides(slideIndex);

setInterval(function () {
    plusSlides(1);
}, 3000);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n, event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot-homepage"); // Use the correct class here

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; dots && i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[slideIndex - 1] && dots[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}
