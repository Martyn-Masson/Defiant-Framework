"use strict";
(function() {
	var gallery = document.querySelector(".image-gallery");
	var mainImage = document.querySelector(".image-gallery-main");
	if(gallery) { var images = document.querySelectorAll(".image-gallery img:not(:first-child)"); }
	var imageOpacity = .6;	

	if(images) { images[0].style.opacity = imageOpacity; }
	if(gallery) {
		gallery.addEventListener("click", function(e) {
			var target = e.target;
	
			if(!target.classList.contains("image-gallery-main")) {
				images.forEach(image => image.style.opacity = 1);
				mainImage.src = target.src;
				mainImage.classList.add("fade-in");
				setTimeout(() => { mainImage.classList.remove("fade-in"); }, 500);
				target.style.opacity = imageOpacity;
			}
		});
	}
})();