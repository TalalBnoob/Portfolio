const btn = document.querySelector('i');

btn.addEventListener('click', () => {
	document.querySelector('body').classList.toggle('dark-mode');
	if (document.querySelector('body').classList.contains('dark-mode')) {
		document.querySelector('.modeIcon').setAttribute('src', './img/moon-solid.svg');
	} else {
		document.querySelector('.modeIcon').setAttribute('src', './img/sun-solid.svg');
	}
	document.querySelector('.ellipse1').classList.toggle('dark-mode');
	document.querySelector('.ellipse2').classList.toggle('dark-mode');
	document.querySelector('.ellipse3').classList.toggle('dark-mode');
	document.querySelector('.ellipse4').classList.toggle('dark-mode');
	document.querySelector('.logo').classList.toggle('dark-mode');
	document.querySelector('.purpel').classList.toggle('dark-mode');
	let as = document.querySelectorAll('a');
	as.forEach(a => {
		a.classList.toggle('dark-mode');
	});

	document.querySelector('.name').classList.toggle('dark-mode');
	document.querySelector('.role').classList.toggle('dark-mode');
	document.querySelector('.about').classList.toggle('dark-mode');
	document.querySelector('.html').classList.toggle('dark-mode');
	document.querySelector('.css').classList.toggle('dark-mode');
	document.querySelector('.js').classList.toggle('dark-mode');
	document.querySelector('.bootstrap').classList.toggle('dark-mode');
	document.querySelector('.git').classList.toggle('dark-mode');
	let cards = document.querySelectorAll('.card');
	cards.forEach(card => {
		card.classList.toggle('dark-mode');
	});
});
