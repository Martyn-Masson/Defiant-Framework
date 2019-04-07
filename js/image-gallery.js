"use strict";
(function() {
	var gallery = document.querySelector(".image-gallery");
	var mainImage = document.querySelector(".image-gallery-main");
	var images = document.querySelectorAll(".image-gallery img:not(:first-child)");
	var imageOpacity = .6;	
	images[0].style.opacity = imageOpacity;

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
})();