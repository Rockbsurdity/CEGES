let slideIndex = 1;
showSlides(slideIndex);

// Controles de siguiente/anterior
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Control de imagen actual (puntos)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 } 
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active-dot";
}

// Cambia automáticamente cada 5 segundos
setInterval(function() {
    plusSlides(1);
}, 5000);
