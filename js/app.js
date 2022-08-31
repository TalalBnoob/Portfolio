const btn = document.querySelector('i');

btn.addEventListener('click', () => {
	document.querySelector('body').classList.toggle('dark-mode');
	if (document.querySelector('body').classList.contains('dark-mode')) {
		document.querySelector('.modeIcon').setAttribute('src', './assets/img/moon-solid.svg');
	} else {
		document.querySelector('.modeIcon').setAttribute('src', './assets/img/sun-solid.svg');
	}
	// let ellipses = document.querySelectorAll('.ellipse');
	// ellipses.forEach(ellipse => {
	// 	ellipse.classList.toggle('dark-mode');
	// });
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

/*
document.querySelector('textarea').classList.toggle('dark-mode');
	document.querySelector('button').classList.toggle('dark-mode');
	let inputs = document.querySelectorAll('input');
	inputs.forEach(inputs => {
		inputs.classList.toggle('dark-mode');
	});
*/
