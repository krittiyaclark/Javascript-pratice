//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', stopSnacks)

function stopSnacks() {
	let snack = Number(document.querySelector('input').value)
	for (let i = 0; i <= snack; i++) {
		document.querySelector('#stops').innerText += 'snack '
	}

	document.querySelector('input').value = ''
}
