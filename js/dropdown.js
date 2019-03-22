(function(global) {
	var dropdownToggles = document.querySelectorAll(".dropdown-toggle");
	var dropdownMenus = document.querySelectorAll(".dropdown-menu");

	dropdownToggles.forEach((toggle, index) => {
		toggle.addEventListener("click", () => {
			dropdownMenus[index].classList.toggle("show");
		});
	});

	global.addEventListener("click", (e) => {
		if(!e.target.classList.contains("dropdown-toggle")) {
			dropdownMenus.forEach((menu) => {
				menu.classList.remove("show");
			});
		}
	})
})(window);