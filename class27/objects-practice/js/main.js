// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism
class House {
	constructor(style, size, roof, color) {
		this._style = style
		this._size = size
		this._roof = roof
		this._color = color
	}
	get style() {
		this._style = style
	}
	yearBuild() {
		console.log(`${this._style} build in 2020`)
	}
}

class paiHouse extends House {
	constructor(style, size, color) {
		super(style, size)
		this._style = style
		this._size = size
		this._color = color
	}
	get style() {
		return this._style
	}
	yearBuild() {
		console.log(`${this._style} build in 2015`)
	}
}

class parentsHouse extends House {
	constructor(style, size, roof, color) {
		super()
		this._style = style
		this._size = size
		this._roof = roof
		this._color = color
	}
	get style() {
		return this._style
	}
	get size() {
		this._style = style
	}
	style() {
		console.log(`${this._style} traditional`)
	}
}

let pai = new paiHouse('modern', 2, 'grey')
let parents = new parentsHouse('traditional', 2, 'normal', 'white')

let houses = [pai, parents]

for (a of houses) {
	a.yearBuild()
}
