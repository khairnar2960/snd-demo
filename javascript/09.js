"use strict";
const actionKeys = ['/','*','-','+','.'];

const [devide, multiply, ...remainig] = actionKeys; // destructuring
console.log({ devide, multiply, remainig, });
const rawOut = document.querySelector('#raw');
const calcOut = document.querySelector('#calc');
const historyOut = document.querySelector('#history');

const calcHistory = (value) => {
	const store = sessionStorage;
	const old = JSON.parse(store.getItem('calc_history') || '[]');
	if(!value) {
		return old;
	} else if (value) {
		old.push(value);
		store.setItem('calc_history', JSON.stringify(old));
	}
}

const showHistory = () => {
	historyOut.innerHTML = calcHistory().join('<br />');
}

let raw = '';
let calc = '';
document.addEventListener('keyup', function(e) {
	// const key = e.key;
	const { key: input } = e; // destructuring
	
	
	if(isNaN(input)) {
		if(input === 'Enter') {
			// remove trailing operators
			const match = raw.match(/([+-\/*])+$/);
			if (match) {
				raw = raw.substr(0, match.index);
			}
			calc = eval(raw);
			calcHistory(raw +' = '+ calc);
		} else if (input === 'Escape') {
			calc = '';
			raw = '';
		} else if (actionKeys.includes(input)) {
			if(calc) {
				raw = calc + input;
				calc = '';
			} else {
				raw += input;
			}
		}
	} else {
		raw += parseInt(input);
		if(calc) {
			calc = '';
		}
	}
	rawOut.value = raw;
	calcOut.value = calc;
	showHistory();
});

showHistory();

// setTimeout
const timeout = setTimeout(function(){
	console.log('hello');
}, 3000); // miliseconds

// clearTimeout(timeout); // stop timeout

// setInterval
const interval = setInterval(function() {
	console.log('hello new');
}, 1000);

setTimeout(() => {
	clearInterval(interval); // stop interval
	console.log('Interval clreared');
}, 3000);

// date
console.log(new Date());
console.log(new Date('2024-12-12'));
const dt = new Date('2024-12-12 05:45:30')

console.log(dt.getFullYear());

dt.setFullYear(2023);
console.log(dt);

dt.setFullYear(dt.getFullYear() + 5)
console.log(dt);
