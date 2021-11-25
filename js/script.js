// function start
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
};
// completed functions
// function start
var slideIndex = 1;
showSlid(slideIndex);

function plusSlid(n) {
    showSlid(slideIndex += n);
}

function currentSlid(n) {
    showSlid(slideIndex = n);
}

function showSlid(n) {
    var i;
    var slides = document.getElementsByClassName("mySlid");
    var dot = document.getElementsByClassName("dots");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" actives", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dot[slideIndex - 1].className += " actives";
};
// completed functions
// function start
var slideIndex = 1;
showAnnexes(slideIndex);

function plusSlid_annexes(n) {
    showAnnexes(slideIndex += n);
}

function currentSlide_annexes(n) {
    showAnnexes(slideIndex = n);
}

function showAnnexes(n) {
    var i;
    var slid_annexes = document.getElementsByClassName("mySlid_annexes");
    var dot_annexes = document.getElementsByClassName("dot_annexes");
    if (n > slid_annexes.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slid_annexes.length }
    for (i = 0; i < slid_annexes.length; i++) {
        slid_annexes[i].style.display = "none";
    }
    for (i = 0; i < dot_annexes.length; i++) {
        dot_annexes[i].className = dot_annexes[i].className.replace(" active_annexes", "");
    }
    slid_annexes[slideIndex - 1].style.display = "block";
    dot_annexes[slideIndex - 1].className += " active_annexes";
};
// completed functions







