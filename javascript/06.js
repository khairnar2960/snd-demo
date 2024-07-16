"use strict";

// self invoking function
(function() {
	let name = 'Tushar';
	console.log({ name });
})();

// object
const user = {
	// properties
	first_name: 'Dinesh',
	last_name: 'Patel',
	age: 17,
	email: 'dinesh@gmail.com',
	mobile: 9876543210,
	favFruits: ['mango', 'banana'],
	// methods
	canVote: function() {
		// this -> self
		return this.age >= 18;
	},
	getFullName: function() {
		return this.first_name + ' ' + this.last_name;
	}
}

console.log(user);
user.first_name = 'Suresh';
console.log(user.first_name);

// override function
user.canVote = function() {
	return this.age >= 17
}

console.log(user.canVote());
console.log(user.getFullName());

console.log('values', Object.values(user))
console.log('keys', Object.keys(user))
console.log('entries', Object.entries(user))

// check property is set or available
console.log('first_name' in user)

for (let value in user) {
	console.log(typeof user[value]) // check data type
	if (typeof user[value] !== 'function') {
		console.log(user[value]) // access properties from object
	}
}

Object.entries(user).forEach(function([key, value], index, selfel) {
	console.log({ key, value, index, selfel });
})

const entries = Object.entries(user);
for (let i = 0; i < entries.length; i++) {
	console.log(entries[i])
}

// class
// PascalCase

class User {
	// properties
	name;
	email;
	age;
	
	// methods
	constructor(name, email, age) {
		this.name = name;
		this.email = email;
		this.age = age;
	}
	canVote() {
		return this.age >= 18
	}
}

// instance
const suresh = new User('Ramesh', 'r@gmaail.com', 17);
// suresh.name = 'Suresh';
console.log(suresh)
console.log(suresh.canVote())

console.log('User type', typeof User);
console.log(typeof suresh)

// constructor function
// behaves like class
function Animal(name, age) {
	this.name = name;
	this.age = age;
}

// instance
const cat = new Animal('cat', 4);

console.log(cat);
console.log('Animal type', typeof Animal);
console.log(typeof cat);
console.log(cat instanceof User);

// Number, String, Boolean, Object, function, undefined -> premitive
// array, class -> non premitive

const nums = [1, 2, 3, 4, 5];
// const nums = range(5, 10)
for(let i = 0; i < nums.length; i++) {
	console.log(nums[i]);
}

// generator

/*
function range(from, to) {
	const arr = [];
	for (let i = from; i <= to; i++) {
		arr.push(i);
	}
	return arr;
}
*/
let value = 0;
function* range(from, to) {
	for(let i = from; i <= to; i++) {
		yield i;
	}
}

const r = range(0, 5)
console.log(r)
r.forEach(a => {
    console.log(a)
})
for (let num of range(0, 5)) {
	console.log({num})
}
/*
console.log(r.next())
console.log(r.next())
console.log(r.next())
console.log(r.next())
console.log(r.next())
console.log(r.next())
console.log(r.next())
*/