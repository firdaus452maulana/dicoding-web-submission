var slideIndex = 1;

function showMenu(){
    document.getElementById("navLinks").style.right = "0";
}

function hideMenu(){
    document.getElementById("navLinks").style.right = "-200px";
}

function goToLinkedin(){
    location.href='https://www.linkedin.com/in/muhammad-firdaus-maulana/';
}
function goToGithub(){
    location.href='https://github.com/firdaus452maulana';
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("card-project");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}