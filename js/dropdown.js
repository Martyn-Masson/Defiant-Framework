(function() {
	var dropdownToggle = document.querySelector(".dropdown-toggle");
	var dropdownMenu = document.querySelector(".dropdown-menu");
	
	dropdownToggle.addEventListener("click", () => {
		dropdownMenu.classList.toggle("show");
	});
})();