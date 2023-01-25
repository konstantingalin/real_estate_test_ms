import '../styles/index.scss';
if (process.env.NODE_ENV === 'development') {
	require('../index.html');
}

window.addEventListener('DOMContentLoaded', function () {
	'use strict';

	const selectSingle = document.querySelector('.__select');
	const selectSingle_title = selectSingle.querySelector('.__select__title');
	const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

	// Toggle menu
	selectSingle_title.addEventListener('click', () => {
	if ('active' === selectSingle.getAttribute('data-state')) {
		selectSingle.setAttribute('data-state', '');
	} else {
		selectSingle.setAttribute('data-state', 'active');
	}
	});

	// Close when click to option
	for (let i = 0; i < selectSingle_labels.length; i++) {
	selectSingle_labels[i].addEventListener('click', (evt) => {
		selectSingle_title.textContent = evt.target.textContent;
		selectSingle.setAttribute('data-state', '');
	});
	}

	// Progress bar

	const prosress_bar_item = document.querySelector('.progress_bar__item p');
	const prosress_bar_num = document.querySelector('.progress_bar__item .num');
	const prosress_bar_button = document.querySelector('.progress_bar__box__item .button');
	let num = prosress_bar_num.textContent * 1;

	function numPlus (num) {
		if(num < 25) {
			setTimeout(() => {
				num++;
				prosress_bar_num.textContent = num;
				numPlus(num);
			}, 35);
		} else {
			prosress_bar_button.classList.add('none');
		}
	}

	prosress_bar_button.addEventListener('click', (e) => {
		e.preventDefault();

		if(!prosress_bar_button.classList.contains('none')) {
			numPlus(num);
		}
		
		prosress_bar_item.style.width = '35%';
	})


	// Accordion

	const accordion_button = document.querySelector('.accordion_button');
	const accordion_box = document.querySelector('.accordion_box');

	accordion_button.addEventListener('click', e => {
		e.preventDefault();

		if(accordion_button.classList.contains('active')){
			accordion_box.style.display = 'none';
			accordion_button.classList.remove('active');
		} else {
			accordion_box.style.display = 'block';
			accordion_button.classList.add('active');
		}
	})
});
