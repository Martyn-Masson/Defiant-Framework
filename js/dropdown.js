(function(global) {
	var dropdownMenu = {
		dropdownButtons: document.querySelectorAll(".dropdown-toggle"),
		openMenus: document.querySelectorAll(".dropdown-menu"),
		closeOpenMenus() { this.openMenus.forEach(menu => menu.classList.remove("show")); },
		openSeparateMenus() {
			this.dropdownButtons.forEach((btn) => {
				btn.addEventListener("click", function(e) {
					var dropContent = btn.nextElementSibling;
					var shouldOpen = !dropContent.classList.contains("show");
					dropdownMenu.closeOpenMenus();

					if(shouldOpen) { dropContent.classList.add("show");	}
					e.stopPropagation();
				});
			});
		},
		closeMenusOffTarget() {
			global.addEventListener("click", function(e) {
				if(e.target !== this.dropdownButtons) { dropdownMenu.closeOpenMenus(); }				
			});
		}
	};
	dropdownMenu.openSeparateMenus();
	dropdownMenu.closeMenusOffTarget();
})(window);