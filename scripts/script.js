const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const container = document.getElementById('container');
const items = container.querySelectorAll('.list .item');
const indicator = document.querySelector('.indicators');
const dots = indicator.querySelectorAll('ul li');
const list = container.querySelector('.list');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function setSlide() {
	let itemOld = container.querySelector('.list .item.active');
	itemOld.classList.remove('active');
	items[active].classList.add('active'); // Adiciona a classe active ao novo slide

	let dotsOld = indicator.querySelector('ul li.active');
	dotsOld.classList.remove('active');
	dots[active].classList.add('active');

	indicator.querySelector('.number').innerHTML = '0' + (active + 1);
}

// Adicionei os manipuladores de evento de forma correta
prevButton.addEventListener('click', () => {
	list.style.setProperty('--calculation', -1);
	active = active - 1 < firstPosition ? lastPosition : active - 1;
	setTimeout(() => {
		setSlide();
	}, 1);
});

nextButton.addEventListener('click', () => {
	list.style.setProperty('--calculation', 1);
	active = active + 1 > lastPosition ? 0 : active + 1;
	setTimeout(() => {
		setSlide();
	}, 1);
});
