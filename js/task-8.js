const inputQuantityBoxes = document.querySelector('input[type="number"]');
const btnCreateBoxes = document.querySelector('button[data-action="render"]');
const btnDestroyBoxes = document.querySelector('button[data-action="destroy"]');
const boxesContainer = document.querySelector('div#boxes');

function getRamdomColor() {
	return Math.round(Math.random() * 255);
}

function createBoxes(amount) {
	if (amount > 0) {
		const arrayBoxes = [];
		let blockSideSize = 10;

		for (let i = 0; i < amount; i++) {
			const box = document.createElement("div");
			box.style.backgroundColor = `rgb(${getRamdomColor()}, ${getRamdomColor()}, ${getRamdomColor()})`;
			box.style.height = blockSideSize + "px";
			box.style.width = blockSideSize + "px";
			blockSideSize += 10;
			arrayBoxes.push(box);
		};

		boxesContainer.append(...arrayBoxes);
	}
}

function destroyBoxes() {
	while (boxesContainer.firstChild !== null) {
		boxesContainer.removeChild(boxesContainer.firstChild);
	}
}

btnCreateBoxes.addEventListener('click', () => createBoxes(inputQuantityBoxes.value));
btnDestroyBoxes.addEventListener('click', destroyBoxes);