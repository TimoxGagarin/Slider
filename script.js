var slides = document.getElementsByClassName("slides")[0].getElementsByClassName("slide");
var currSlide = 0;
var interval = setInterval(nextSlide, 10000);

function nextSlide(){
	slides[currSlide].className = "slide";
	currSlide = (currSlide+1)%slides.length;
	slides[currSlide].className = "slide active";
	
	clearInterval(interval);
	interval = setInterval(nextSlide, 10000);
}

function lastSlide(){	
	slides[currSlide].className = "slide";
	currSlide = Math.abs(currSlide-1);
	slides[currSlide].className = "slide active";
	
	clearInterval(interval);
	interval = setInterval(nextSlide, 10000);
}