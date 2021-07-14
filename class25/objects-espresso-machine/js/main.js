//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
	constructor(color, make, model, price) {
		this.color = color
		this.model = model
		this.make = make
		this.price = price
	}
	start() {
		console.log('Starting machine')
	}

	stop() {
		console.log('Stoping machine')
	}

	steam() {
		console.log('Steaming machine')
	}
}
let gaggia = new EspressoMachine('silver', 'Gagie', 'Classic Pro', 500)
