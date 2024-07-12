"use strict";

// multiline string
let name = `john
another line`;

// Array
// indexed

const names = [29, 2500.25, "john", 'jene', `jony`, true, [1,2,3]];
/*
at
pop
shift
push
unshift
sort
toSorted
toString
reverse
toReverse
fill
join,
slice
splice
toSpliced
concat
indexOf
keys
values
with

filter
find
findIndex
forEach
map
reduce
some
every
*/

console.log(names);
console.log(names[2]);
console.log(names.at(2));

// push
// append at last
names.push('anil');
let index = names.push('sunil');
console.log({ index });
console.log(names);

// pop
// remove last element
names.pop();
console.log(names);

// shift
// remove first element
names.shift();
console.log(names);

// unshift
// prepend element at start
names.unshift('dipali');
console.log(names);


// sort
// sort and update original array
const fruits = ['banana', 'apple', 'lemon', 'mango'];
fruits.sort();
console.log(fruits);

const nums = [100, 20, 2, 50, 3, 30, 4, 80, 90];
// ascending
nums.sort(function(acc, cur) {
	return acc - cur;
}, 0);
// descending
nums.sort(function(acc, cur) {
	return cur - acc;
}, 0);
console.log(nums);

// toSorted
// sort an array and returns new one
const fruits2 = ['banana', 'apple', 'lemon', 'mango'];
console.log(fruits2.toSorted())
console.log(fruits2);

console.log(fruits.toString());

// reverse
// reverse an original array
fruits.reverse();

// toReversed
// reverse an array and return new one
console.log(fruits.toReversed());

// fill
// fill all elements with given value
// fruits.fill('hello');

// find
// console.log(fruits.find());

// join
console.log(fruits.join(' or '));

// slice
// return an part of array
console.log(fruits.slice(0, 2));

// splice
// delete range of elements
const a = ['apple', 'banana', 'lemon', 'mango', 'apple2', 'banana2', 'lemon2', 'mango2'];
// a.splice(2, 3);

// toSpliced
// splice and return new one
a.toSpliced(2, 3);

console.log(a);
// delete a[4];
const s1 = a.slice(0, 4);
const s2 = a.slice(5);
console.log([s1, s2]);
console.log([...s1, ...s2]);

// copy array
const b = [...a]; // Array.from(a)

// asign new value
a[1] = 'kivi';

console.log(b);
console.log(a);

// concat
console.log(a.concat(b)); // [...a, ...b]

// indexOf
// returns number >= 0 if found else -1
console.log(a.indexOf('Kivi'))

console.log(Array.from(a.keys()))
console.log(Array.from(a.values()))

// with
// change value and create copy
console.log(a.with(2, 'banana'))