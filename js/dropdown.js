(function(global) {
	var dropBtns = document.querySelectorAll(".dropdown-toggle");
	
	function closeOpenItems() {
		var openMenus = document.querySelectorAll(".dropdown-menu");
		openMenus.forEach((menu) => {
			menu.classList.remove("show");
		});
	}

	dropBtns.forEach((btn) => {
		btn.addEventListener("click", function(e) {
			var dropContent = btn.nextElementSibling;
			var shouldOpen = !dropContent.classList.contains("show");
			
			closeOpenItems();

			if(shouldOpen) {
				dropContent.classList.add("show");
			}
			e.stopPropagation();
		});
	});

	global.addEventListener("click", (e) => {
		if(e.target !== dropBtns) {
			closeOpenItems();
		}
	})
})(window);