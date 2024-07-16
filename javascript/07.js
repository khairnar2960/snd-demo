"use strict";

// show message
// alert('Hello World');

function deleteUser() {
	// confirm action
	const action = confirm('Are you sure want to delete?');
	console.log({ action });
	console.log('hello');
}
// deleteUser();

// get user input
// const data = prompt('User name')

// console.log({ data })

// BOM - Browser Object Model -> window

// DOM - Document Object Model

// window.document
const sections = document.getElementsByClassName('section');
const aboutDetail = document.getElementById('about-detail');
const aboutTitle = document.getElementsByTagName('h2');
const username = document.getElementsByName('username');

// const single = document.querySelector('#about-detail'); // .classname, #id, div|header tagname
const single = document.querySelector('.section:has(#about-detail)');
const multiple = document.querySelectorAll('.section');

console.log({ sections, aboutDetail, aboutTitle, username, single, multiple })

// const single = document.querySelector('#about-detail');

if (aboutDetail) {
	// aboutDetail.innerText = 'Hello world';
	console.log(aboutDetail.innerText);
	aboutDetail.innerHTML = '<h6>Hello world</h6>';
	console.log(aboutDetail.innerHTML);
	
	aboutDetail.style.backgroundColor = 'blue';
	aboutDetail.style.border = '1px solid white';
	console.log(aboutDetail.style.backgroundColor)
}

const message = document.querySelector('.message');
function getMessage() {
	if(message) {
		const input = prompt('Your message');
		// input
		message.innerText = input;
		// message.className = 'message ' + input;
		// message.classList.add(input); // add, remove, toggle
		// message.classList.add(input);
		if (input !== 'error') {
			// message.classList.remove('error');
			message.classList.toggle('error');
		}
		console.log(message.classList)
	}
}
// getMessage()

const name = document.querySelector('[name="username"]');
if (name) {
	name.value = 'dhiraj256';
}

// event, eventlisteners

// click, hover, input, keypress
if (name) {
	// name.oninput = function(event) {
	name.oninput = (event) => {
		// const input = this;
		const input = event.target;
		if(input.value === '') {
			message.innerText = 'username cant be empty';
			message.className = 'message error';
		} else if(input.value.length < 6) {
			message.innerText = 'username cant be lower than 7 chars.';
			message.className = 'message error';
		} else if(input.value.length > 20) {
			message.innerText = 'username cant be more than 20 chars.';
			message.className = 'message error';
		} else {
			message.innerText = '';
			message.className = 'message';
		}
	}
}

const password = document.querySelector('[name="password"]');
const loginBtn = document.querySelector('#login-btn');
if(loginBtn) {
	// loginBtn.addEventListener('event', callbackfunction);
	loginBtn.addEventListener('click', (e) => {
		const btn = e.target;
		
		console.log(name.value);
		console.log(password.value);
	});
}
