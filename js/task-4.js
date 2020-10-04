let counterValue = 0;
const value = document.querySelector('span#value');

function increment () {
	counterValue++;
	value.textContent = counterValue;
}

function decrement () {
	counterValue--;
	value.textContent = counterValue;
}

const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"');

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);


// document.addEventListener('click', function(event) {

// });