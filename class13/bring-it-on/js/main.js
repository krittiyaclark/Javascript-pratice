// *Variables*
// Create a variable and console log the value
let num = 99

// Create a variable, add 10 to it, and alert the value
console.log((num = Number((num += 10))))
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtracts(num1, num2, num3, num4) {
	alert(num1 - num2 - num3 - num4)
}
subtracts(9, 99, 60, 30)
// Create a function that divides one number by another and returns the remainder
function divides(num1, num2) {
	alert(num1 % num2)
}
divides(9, 2)
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function sumGreater(n1, n2) {
	let sum = n1 + n2
	if (sum > 50) {
		alert('Jumanji')
	}
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multAndDiviv(n1, n2, n3) {
	let product = n1 * n2 * n3
	if (product % 3 === 0) {
		alert('Horse')
	}
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function logWord(word, num) {
	for (let i = 1; i <= num; i++) {
		console.log(word)
	}
}
logWord('raceCar', 9)
