"use strict";

/*
const dropDownButton = document.querySelector('.dropdown > button');

if(dropDownButton) {
	dropDownButton.addEventListener('click', function(event) {
		const dropdown = dropDownButton.closest('.dropdown');
		dropdown.classList.toggle('show');
	});
}
*/

const dropdowns = document.querySelectorAll('.dropdown');
const dropDownButtons = document.querySelectorAll('.dropdown > button');

dropDownButtons.forEach((button) => {
	button.addEventListener('click', function(event) {
		const dropdown = button.closest('.dropdown');
		if(!dropdown.classList.contains('show')) { // should show
			dropdowns.forEach((dropdown) => {
				dropdown.classList.remove('show');
			});
		}
		dropdown.classList.toggle('show');
	});
});


document.addEventListener('click', function(e) {
	if(!e.target.closest('.dropdown')) {
		dropdowns.forEach((dropdown) => {
			dropdown.classList.remove('show');
		});
	}
})


// calculator

const buttons = document.querySelectorAll('[class^="cbtn-"]');

const rawInput = document.querySelector('.raw-input');
const calcInput = document.querySelector('.calc');
let raw = '';
let calc = '';

rawInput.innerText = raw;
calcInput.innerText = calc;

buttons.forEach(btn => {
	btn.addEventListener('click', function() {
		const value = btn.className.split('-')[1]
		if(isNaN(value)) { // action buttons
			switch(value) {
				case 'mul':
					rawInput.innerText += '*';
					break;
				case 'sub':
					rawInput.innerText += '-';
					break;
				case 'add':
					rawInput.innerText += '+';
					break;
				case 'clr':
					calcInput.innerText = '';
					rawInput.innerText = '';
					break;
				case 'dec':
					rawInput.innerText += '.';
					break;
				default:
					calcInput.innerText = eval(rawInput.innerText);
			}
		} else { // number
			rawInput.innerText += value;
		}
	});
})