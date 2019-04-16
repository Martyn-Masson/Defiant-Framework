(function(global) {	
	var slideshow = {
		slides: document.querySelectorAll(".slide"),
		dots: document.querySelectorAll(".slide-dot"),
		hideInactiveSlides() { this.slides.forEach((slide, index) => {
			slide.style.display = "none";
			this.dots[index].style.background = "#bbb";
		})},
		openSlide() {
			this.dots.forEach((dot, index) => {
				dot.addEventListener("click", () => {
					slideshow.hideInactiveSlides();
					this.slides[index].style.display = "block";
					dot.style.background = "orangered";
				});
			});
		}
	};

	slideshow.openSlide();
	slideshow.hideInactiveSlides();
	slideshow.slides[0].style.display = "block";
	slideshow.dots[0].style.background = "orangered";	
})(window);