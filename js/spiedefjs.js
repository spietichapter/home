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

function nomore{
  if (slideIndex == 1 )
  {document.getElementById("a").style.display='block';
	document.getElementById("b").style.display='none';
document.getElementById("c").style.display='none';
	document.getElementById("d").style.display='none';
  }
   if (slideIndex == 2 )
  {document.getElementById("b").style.display='block';
	document.getElementById("a").style.display='none';
document.getElementById("c").style.display='none';
	document.getElementById("d").style.display='none';
  }
   if (slideIndex == 3 )
  {document.getElementById("c").style.display='block';
	document.getElementById("a").style.display='none';
document.getElementById("b").style.display='none';
	document.getElementById("d").style.display='none';
  }
   if (slideIndex == 4  )
  {document.getElementById("d").style.display='block';
	document.getElementById("b").style.display='none';
document.getElementById("c").style.display='none';
	document.getElementById("a").style.display='none';
  }
}

    
