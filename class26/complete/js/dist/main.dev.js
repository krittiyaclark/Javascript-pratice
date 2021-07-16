"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Animal =
/*#__PURE__*/
function () {
  function Animal(name) {
    _classCallCheck(this, Animal);

    this._name = name;
  }

  _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      console.log("".concat(this._name, " makes sound"));
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }]);

  return Animal;
}();

var Dog =
/*#__PURE__*/
function (_Animal) {
  _inherits(Dog, _Animal);

  function Dog(name, breed) {
    var _this;

    _classCallCheck(this, Dog);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dog).call(this, name));
    _this._breed = breed;
    return _this;
  }

  _createClass(Dog, [{
    key: "speak",
    value: function speak() {
      _get(_getPrototypeOf(Dog.prototype), "speak", this).call(this);

      console.log("".concat(this._name, " makes barks"));
    }
  }, {
    key: "breed",
    get: function get() {
      return this._breed;
    }
  }]);

  return Dog;
}(Animal);

var Cat =
/*#__PURE__*/
function (_Animal2) {
  _inherits(Cat, _Animal2);

  function Cat(name, breed) {
    var _this2;

    _classCallCheck(this, Cat);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Cat).call(this, name, breed));
    _this2._name = name;
    _this2._breed = breed;
    return _this2;
  }

  _createClass(Cat, [{
    key: "speak",
    value: function speak() {
      _get(_getPrototypeOf(Cat.prototype), "speak", this).call(this);

      console.log("".concat(this._name, " makes meow"));
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "breed",
    get: function get() {
      return this._breed;
    }
  }]);

  return Cat;
}(Animal);

var simba = new Dog('simba', 'poddle');
var bob = new Cat('bob', 'someBreed');