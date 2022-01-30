// DARK MODE
const btn = document.querySelector('.mode');
const body = document.querySelector('body');
const icon = document.querySelector('.icon');
let theme;

const changeMode = () => {
	if (body.dataset.mode === 'dark') {
		body.dataset.mode = 'light';
		icon.classList.remove('fa-sun');
		icon.classList.add('fa-moon');
		icon.style.color = 'white';
		localStorage.setItem('theme', 'light');
	} else {
		body.dataset.mode = 'dark';
		icon.classList.add('fa-sun');
		icon.classList.remove('fa-moon');
		icon.style.color = '';
		localStorage.setItem('theme', 'dark');
	}
};

const handleStorage = () => {
	theme = localStorage.getItem('theme');
	if (theme !== 'light') {
		body.dataset.mode = 'light';
		changeMode();
	} else {
		body.dataset.mode = 'dark';
		changeMode();
	}
};

btn.addEventListener('click', changeMode);
window.addEventListener('DOMContentLoaded', handleStorage);
