const categories = document.querySelector('ul#categories');
console.log(`В списке ${categories.children.length} категории`);

const categoryTypes = document.querySelectorAll('li.item');

categoryTypes.forEach(({children})=> {
	console.log(`Категория: ${children[0].textContent}`);
	console.log(`Количество элементов: ${children[1].children.length}`);
})