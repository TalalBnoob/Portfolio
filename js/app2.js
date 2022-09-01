const btn = document.querySelector('i');

btn.addEventListener('click', () => {
	document.querySelector('body').classList.toggle('dark-mode');
	if (document.querySelector('body').classList.contains('dark-mode')) {
		document.querySelector('.modeIcon').setAttribute('src', './img/moon-solid.svg');
	} else {
		document.querySelector('.modeIcon').setAttribute('src', './img/sun-solid.svg');
	}
	let ellipses = document.querySelectorAll('.ellipse');
	ellipses.forEach(ellipse => {
		ellipse.classList.toggle('dark-mode');
	});
	document.querySelector('.logo').classList.toggle('dark-mode');
	document.querySelector('.purpel').classList.toggle('dark-mode');
	let as = document.querySelectorAll('a');
	as.forEach(a => {
		a.classList.toggle('dark-mode');
	});
	document.querySelector('textarea').classList.toggle('dark-mode');
	document.querySelector('button').classList.toggle('dark-mode');
	let inputs = document.querySelectorAll('input');
	inputs.forEach(inputs => {
		inputs.classList.toggle('dark-mode');
	});
	let labels = document.querySelectorAll('label');
	labels.forEach(label => {
		label.classList.toggle('dark-mode');
	});
});

/*

*/
