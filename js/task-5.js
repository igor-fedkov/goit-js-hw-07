const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

input.addEventListener('input', () => input.value.length > 0 ?
	output.textContent = input.value : output.textContent = "незнакомец");