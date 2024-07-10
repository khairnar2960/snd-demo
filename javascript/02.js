"use strict";
// conditional if else else if
/*
if (condition) { // true|value->not(0,null,undefined,'')=>1,"string"
	// code block
} else {
	// runs if no condition meet
}

if (condition) {
	//
} else if () {
	//
} else {
	//
}

switch(value) {
	case (condition):
		// code
		break;
	default:
		// code block for no case match
}
*/

/*
check number is even or odd
num / 2 => remainder 0 -> even
num / 2 => remainder 1 -> odd
*/
let num1 = 3;

if (num1 % 2 === 0) {
	console.log('Even');
} else {
	console.log('Odd');
}

switch ('hell') {
	case 'hello':
		console.log('hello world');
		break;
	case 'hell':
		console.log('hell world');
		break;
	default:
		console.log('no hello');
}

if (num1 > 4) {
	console.log('Greater than 4');
} else if (num1 === 4) {
	console.log('4');
} else {
	console.log('Less than 4');
}

// String
/*
toLowerCase
toUpperCase
replace
replaceAll
search
length // property
trim
trimStart
trimEnd
at
concat
match // use RegExp
matchAll // use RegExp
charAt
startsWith
endsWith
*/
let name = "  Johhny       ";

// remove spaces from both sides
// name = name.trim();

// remove spaces from left sides
// can be used as trimLeft
name = name.trimStart();

// remove spaces from right sides
// can be used as trimRight
name = name.trimEnd();

let lowerCase = name.toLowerCase();
console.log({ lowerCase });

let upperCase = name.toUpperCase();
console.log({ upperCase });

// use replaceAll to change all
let replaced = name.replace('h', 'e');
console.log({ replaced });

let found = name.search('h');
console.log({ found });

let length = name.length;
console.log({ length });

console.log(name.at(5));

// concat
// let concated = name.concat('hello', 'world');
let concated = name + ' hello ' + 'world';

console.log({ concated });

// charAt

console.log(name.charAt(5)) // y
console.log(name.charCodeAt(5)) // 121
String.fromCharCode(121) // y

// start end
let startsWith = name.startsWith('J');
let endsWith = name.endsWith('y');

console.log({name});
console.log({endsWith});
console.log({startsWith});

// split

console.log(concated.split(' '));

// Number
let num2 = 45.00;
console.log({ num2 });

let numString = num2.toString();
console.log({ numString });

let fixed = num2.toFixed(2);
console.log({ fixed })

// return scintific value
let exp = num2.toExponential();
