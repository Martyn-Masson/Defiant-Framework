(function() {
	var navToggle = document.querySelector(".nav-toggle");
	var mobileNav =  document.querySelector(".mobile-nav");
	var body = document.querySelector("body");

	body.addEventListener("keyup", (e) => {
		if(e.keyCode == 27) {
			mobileNav.classList.remove("mobile-nav--open")	;
		}
	});

	navToggle.addEventListener("click", () => {
		mobileNav.classList.toggle("mobile-nav--open");
	});
})();