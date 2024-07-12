"use strict";
// loops

const a = [
	['john', 29, 2000],
	['janhvi', 21, 1000],
];

// a[0][2] > 1000
// a[1][2] > 1000

// for

// incremental
for (let index = 0; index < 10; index++) {
	if (index === 4) {
		continue; // skips itteration
	} else if (index === 7) {
		break; // stop itteration
	}
	console.log({index});
}

// decremental
for (let index = 9; index >= 0; index--) {
	console.log({index});
}

for(let i = 0; i < a.length; i++) {
	const check = a[i][2] >= 1000;
	if (check) {
		console.log('index ' + i, 'greater')
	} else {
		console.log('index ' + i, 'less')
	}
}

for (let i = 0; i < 10; i += 3) {
	console.log({ i })
}

// while
let age = 0;
while (age < 50) {
	console.log(age);
	age++;
}

let age1 = 10;
while (age1 >= 0) {
	console.log(age1);
	age1--;
}

let num = 0;
do {
	console.log({ num });
	num++;
} while (num > 10)

const str = 'hello world';
for (let i = 0; i < str.length; i++) {
	console.log(str[i]);
}