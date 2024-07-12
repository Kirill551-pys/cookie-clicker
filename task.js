let clicks = 0; 
let cookie = document.getElementById(`cookie`);
let counterElement = document.getElementById(`clicker__counter`);

cookie.addEventListener('click', () => {
	clicks++;
	counterElement.textContent = `Количество кликов: ${clicks}`;

	if (cookie.offsetWidth > 50) {
		cookie.style.width = '50px';
		cookie.style.height = '50px';
	} else {
		cookie.style.width = '100px';
		cookie.style.height = '100px';
	}
});