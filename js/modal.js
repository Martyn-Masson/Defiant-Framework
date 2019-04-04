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
			if(modalContent.classList.contains("slide-down")) {
				modalContent.classList.remove("slide-down");
			}
			modal.style.display = "block";
			modalContent.style.display = "block";
		});
	});

	if(dismissBtn) {
		dismissBtn.addEventListener("click", () => {
			modalContent.classList.add("slide-down");
			setTimeout(() => {
				modal.style.display = "none";
			}, 1000);
		});
	}
	
	if(closeModal) {
		closeModal.addEventListener("click", () => {
			modalContent.classList.add("slide-down");
			setTimeout(() => {
				modal.style.display = "none";
			}, 1000);
		});
	}

	if(modal) {
		modal.addEventListener("click", (e) => {
			if(e.target !== modalContent && e.target.parentNode !== modalContent) {
				modalContent.classList.add("slide-down");
				setTimeout(() => {
					modal.style.display = "none";
				}, 1000);
			}
		});
	}
	
})(window);