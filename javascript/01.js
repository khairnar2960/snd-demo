"use strict";
// Print
console.log('hello world');

/*
Hello this
is multi line comment
*/

console.error('this is an error');

// Data types

/*
Number => 1, 1.23, -56, Infinity
String => 'anything sting'
Boolean => true|false
Array => [1,2,3,3,2]|['a','b']|[1, 'abcd', true, {}]
Set => {}
Object => { name: 'Tushar', age: 30, ishuman: true }
Null
NaN
undefined
Class
*/

// Variables
// var, let, const

// Cases cameCase, PascalCase, snake_case
// var userName = 'Tushar'; // dont use this
let userName = 'diffrent';
userName = 'Tushar';

const MAX_AGE = 18;
console.log(MAX_AGE);

console.log(userName);

// operators

// arithmatic

/*
+
-
/
*
% modulus | remainder
*/

let a = 10;
let b = 20;
console.log(a + b);
console.log(a - b);
console.log(b / a);
console.log(b * a);
console.log(9 % 3);

// asignment
/*
=
+=
-=
/=
*=
*/
let num = 10;
// num = 20;

// num = num + 10
num += 20; // 30
num -= 10; // 20
num /= 5; // 4
num *= 5; // 20

// console.log('num:', num);
console.log({ num });

// conparison

/*
==
===
<
>
<=
>=
!=
!==
*/

console.log("10 == '10':", 10 == '10'); // value == value
console.log("10 === '10':", 10 === '10'); // datatype == datatype, value == value
console.log("10 != 10:", 10 != '10'); // false
console.log("10 !== '10':", 10 !== '10'); // false
console.log("9 < 10:", 9 < 10); // true
console.log(9 > 10); // false
console.log(9 <= 10); // true
console.log(9 >= 10); // false

// logical operators
/*
&& = AND -> true if both true else false
|| = OR -> true if any one true else false
! = NOT -> true <-> false
*/

console.log('!:', !true)
console.log('&&:', true && false)
console.log('&&:', true && true)
console.log('||:', true || false)
console.log('||:', true || true)
console.log('||:', false || false)