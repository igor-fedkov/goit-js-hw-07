const validationInput = document.querySelector('input#validation-input');

validationInput.addEventListener('change', () => {
	if (validationInput.value.length == validationInput.dataset.length) {
		if (validationInput.classList.contains("invalid")) {
			validationInput.classList.remove("invalid");
		}
		if (!validationInput.classList.contains("valid")) {
			validationInput.classList.add("valid");
		}
	}
	else {
		if (validationInput.classList.contains("valid")) {
			validationInput.classList.remove("valid");
		}
		if (!validationInput.classList.contains("invalid")) {
			validationInput.classList.add("invalid");
		}
	}
});