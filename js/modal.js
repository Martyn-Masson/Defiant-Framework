"use strict";
(function() {
	// Modal
	var modal = document.querySelector(".modal");
	var modal__content = document.querySelector(".modal__content");
	var btnModal = document.querySelectorAll(".btn--modal");
	var dismissBtn = document.querySelector(".dismiss");
	var closeModal = document.querySelector(".modal__close");
	
	btnModal.forEach((btn) => {
		btn.addEventListener("click", () => {
			modal.style.display = "block";
			modal__content.style.display = "block";
		});
	});

	dismissBtn.addEventListener("click", () => {
		modal.style.display = "none";
		modal__content.style.display = "none";
	});
	closeModal.addEventListener("click", () => {
		modal.style.display = "none";
		modal__content.style.display = "none";
	});
})();