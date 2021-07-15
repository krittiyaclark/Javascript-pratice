//Create an a class and extend it - Can be anything you would like it to be!
class Car {
	constructor(name) {
		this.name = name
	}
	honk() {
		console.log(`${this.name} beep beep`)
	}
}

class Tesla extends Car {
	constructor(name, color) {
		super(name)
		this.color = color
	}
}

let teslaOne = new Car('TeslaOne', 'Brown')
