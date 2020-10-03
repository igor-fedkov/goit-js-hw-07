const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsList = document.querySelector('ul#ingredients');

const items = ingredients.reduce((items, ingredient) => {
	const item = document.createElement("li");
	item.textContent = ingredient;
	items.push(item);
	return items;
}, []);

ingredientsList.append(...items);
