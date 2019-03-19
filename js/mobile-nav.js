(function() {
	var navToggle = document.querySelector(".nav-toggle");
	var mobileNav =  document.querySelector(".mobile-nav");
	var body = document.querySelector("body");

	navToggle.addEventListener("click", () => {
		mobileNav.classList.toggle("mobile-nav--open");
	});
})();