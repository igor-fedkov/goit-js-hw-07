const fontSizeControl = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');

fontSizeControl.addEventListener('input', () => {
	text.style.fontSize = fontSizeControl.value + "pt";
});


