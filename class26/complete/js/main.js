class Animal {
	constructor(name) {
		this._name = name
	}
	get name() {
		return this._name
	}
	speak() {
		console.log(`${this._name} makes sound`)
	}
}

class Dog extends Animal {
	constructor(name, breed) {
		super(name)
		this._breed = breed
	}
	get breed() {
		return this._breed
	}
	speak() {
		super.speak()
		console.log(`${this._name} makes barks`)
	}
}

class Cat extends Animal {
	constructor(name, breed) {
		super(name, breed)
		this._name = name
		this._breed = breed
	}
	get name() {
		return this._name
	}
	get breed() {
		return this._breed
	}
	speak() {
		super.speak()
		console.log(`${this._name} makes meow`)
	}
}

let simba = new Dog('simba', 'poddle')
let bob = new Cat('bob', 'someBreed')
