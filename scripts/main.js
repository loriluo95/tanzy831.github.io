var myImage = document.querySelector('img');

myImage.onclick = function() {
	var source = myImage.getAttribute('src');
	if(source === 'images/vine_logo.png') {
		myImage.setAttribute('src', 'images/firefox.jpg');
	} else {
		myImage.setAttribute('src', 'images/vine_logo.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function changeUser () {
	var userName = prompt('Please enter your name:');
	localStorage.setItem('name', userName);
	myHeading.innerHTML = 'Vine is Cool, ' + userName + '!';
}

if(!localStorage.getItem('name')) {
	changeUser();
} else {
	var userName = localStorage.getItem('name');
	myHeading.innerHTML = 'Vine is Cool, ' + userName + '!';
}

myButton.onclick = function() {
	changeUser();
}