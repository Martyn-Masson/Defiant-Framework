(function() {
	var navToggle = document.querySelector(".nav-toggle");
	var mobileNav =  document.querySelector(".mobile-nav");
	var submenuToggle = document.querySelectorAll(".submenu-toggle");
	var submenuToggleIcon = document.querySelector(".submenu-toggle i");

	document.addEventListener("keyup", (e) => {
		if(e.keyCode == 27) {
			mobileNav.classList.toggle("mobile-nav--open");
		}
	});
	
	navToggle.addEventListener("click", () => {
		mobileNav.classList.toggle("mobile-nav--open");
	});

	window.addEventListener("mouseup", (e) => {
		if(e.target != mobileNav && e.target.parentNode != mobileNav && e.target != submenuToggleIcon) {
			mobileNav.classList.remove("mobile-nav--open");
		}
	});


	for(var i = 0; i < submenuToggle.length; i++) {
		submenuToggle[i].addEventListener("click", function() {
			var submenu = this.nextElementSibling;
			if(submenu.style.display === "block") {
				submenu.style.display = "none";
				submenuToggleIcon.style.transform = "none";
			} else {
				submenu.style.display = "block";
				submenuToggleIcon.style.transform = "rotate(90deg)";
			}
		});
	}

	
})();