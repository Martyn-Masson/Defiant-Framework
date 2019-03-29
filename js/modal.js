"use strict";
(function(global) {
	// Modal
	var modal = document.querySelector(".modal");
	var modalContent = document.querySelector(".modal-content");
	var btnModal = document.querySelectorAll(".btn-modal");
	var dismissBtn = document.querySelector(".dismiss");
	var closeModal = document.querySelector(".modal-close");
	
	btnModal.forEach((btn) => {
		btn.addEventListener("click", () => {
			modal.style.display = "block";
			modalContent.style.display = "block";
		});
	});

	if(dismissBtn) {
		dismissBtn.addEventListener("click", () => {
			modal.style.display = "none";
			modalContent.style.display = "none";
		});
	}
	
	if(closeModal) {
		closeModal.addEventListener("click", () => {
			modal.style.display = "none";
			modalContent.style.display = "none";
		});
	}

	if(modal) {
		modal.addEventListener("click", (e) => {
			if(e.target !== modalContent && e.target.parentNode !== modalContent) {
				modal.style.display = "none";
				modalContent.style.display = "none";
			}
		});
	}
	
})(window);