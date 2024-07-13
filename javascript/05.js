"use strict";

// function
// function sayhello(param) {}

function checkEvenOdd(num) { // num -> parameter
	if (num % 2 === 1) {
		return 'Odd';
		// console.log('Odd');
	} else {
		return 'Even';
		// console.log('Even');
	}
}

const check = checkEvenOdd(5); // 5 -> argument

console.log({check});

// arrow function
const sum = (num1, num2) => {
	return (num1 + num2);
}

console.log(sum(2,3))

// unnonymus
let name = 'vishal'; // global

const unnonymus = function() {
	const name = 'tushar'; // function scope
	console.log('hello ' + name)
}

unnonymus();
console.log({ name });

// callback
function sumAndMultiply(num1, num2, multiplyFn) { // multiplyFn -> callback
	const sum = num1 + num2;
	return multiplyFn(sum);
}

/*
function multiply(value) {
	return value * 2;
}
*/
const multiply = (value) => {
	return value * 2;
}

const calc = sumAndMultiply(1, 2, multiply)

console.log({ calc })

function sumMultiple(num1, num2) {
	const sum = num1 + num2;
	
	const multiply = (multiplier) => { // lexical scope
		return sum * multiplier;
	}
	
	return multiply;
}
const _sum = sumMultiple(5, 4);
console.log(_sum);
console.log(_sum(2));

const fruits = ['banana', 'apple', 'lemon', 'mango'];

/*
filter
find
findIndex
forEach
map
some
includes
every
reduce
*/
function removeApple(value) {
	return value !== 'apple';
}

console.log(fruits.filter(removeApple))
console.log(fruits.find(function(value) {
	return value === 'lemon'
}))

console.log(fruits.findIndex(function(value) {
	return value === 'lemon'
}))

fruits.forEach((fruit) => {
	console.log({ fruit })
})
const nums = [0,1,2,3,4,5];
console.log(nums.map(num => num * 2))

console.log(nums.some(num => num === 6));
console.log(nums.some(num => {
	return num === 0 || (Array.isArray(num) && num[0] == 0)
}));
console.log(nums.includes(0))

console.log(nums.every(num => num >= 0))

let arrSum = 0;
/*
nums.forEach(num => {
	arrSum += num;
});
*/
/*
for (let i = 0; i < nums.length; i++) {
	const num = nums[i]
	arrSum += num;
}
*/
function sumAll(num) {
	arrSum += num;
}
nums.forEach(sumAll);

console.log({ arrSum })

const sumReduced = nums.reduce((acc, cur) => {
	return acc + cur;
}, 0)

console.log({ sumReduced })

const arr = [0,1,2,3,4,5, 0,1,2,3,4,5, 6, 5];
console.log(arr)
// set

const unique = new Set(arr);
console.log(Array.from(unique))