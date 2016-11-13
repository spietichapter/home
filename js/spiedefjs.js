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


var slideIn = 1;
showTexts(slideIn);

function plustext(n) {
  showTexts(slideIn += n);
}

function currenttext(n) {
  showTexts(slideIn = n);
}
function showTexts(n){
  var x;
  var tslides = document.getElementsByClassName("mytext");
  if (n > tslides.length) {slideIn = 1}
  
  if (n < 1) {slideIn = tslides.length}
  for (x = 0; x < tslides.length; x++) {
      tslides[x].style.display = "none";
  }
  tslides[slideIn-1].style.display = "block";
}
