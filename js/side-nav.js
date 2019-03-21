(function(global) {
	var navToggle = document.querySelector(".nav-toggle");
	var sideNav =  document.querySelector(".side-nav");
	var submenuToggle = document.querySelectorAll(".submenu-toggle");
	var submenuToggleIcon = document.querySelector(".submenu-toggle i");
	var overlay = document.createElement("div");
	overlay.className = "overlay";
	
	function toggleOverlay() {
		if(sideNav.classList.contains("side-nav--open")) {
			document.body.appendChild(overlay);
		} else {
			document.body.removeChild(overlay);
		}
	}

	document.addEventListener("keyup", (e) => {
		if(e.keyCode == 27) {
			sideNav.classList.toggle("side-nav--open");
			toggleOverlay();
		}
	});
	
	navToggle.addEventListener("click", () => {
		sideNav.classList.toggle("side-nav--open");
		toggleOverlay();
	});

	global.addEventListener("click", (e) => {
		// If the target isn't the side-nav or the nav-toggle
		if((e.target != sideNav) && (e.target.parentNode != sideNav) && (e.target != navToggle) && (e.target.tagName !== "I")) {
			sideNav.classList.remove("side-nav--open");
			toggleOverlay();
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

	
})(window);