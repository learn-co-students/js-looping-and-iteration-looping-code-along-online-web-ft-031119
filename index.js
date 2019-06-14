// Code your solutions in this file

let newarray = [];

function writeCards (array, eventname) {
	for (var i = 0; i < array.length; i++) {
		newarray.push(`Thank you, ${array[i]}, for the wonderful ${eventname} gift!`)
	}
	return newarray
}

function countdown(number) {
	let i = 0;
	for(i = number; i >= 0 ;i--) {
		console.log(i);
	}
}