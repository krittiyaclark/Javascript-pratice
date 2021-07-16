"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism
var House =
/*#__PURE__*/
function () {
  function House(style, size, roof, color) {
    _classCallCheck(this, House);

    this._style = style;
    this._size = size;
    this._roof = roof;
    this._color = color;
  }

  _createClass(House, [{
    key: "yearBuild",
    value: function yearBuild() {
      console.log("".concat(this._style, " build in 2020"));
    }
  }, {
    key: "style",
    get: function get() {
      this._style = style;
    }
  }]);

  return House;
}();

var paiHouse =
/*#__PURE__*/
function (_House) {
  _inherits(paiHouse, _House);

  function paiHouse(style, size, color) {
    var _this;

    _classCallCheck(this, paiHouse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(paiHouse).call(this, style, size));
    _this._style = style;
    _this._size = size;
    _this._color = color;
    return _this;
  }

  _createClass(paiHouse, [{
    key: "yearBuild",
    value: function yearBuild() {
      console.log("".concat(this._style, " build in 2015"));
    }
  }, {
    key: "style",
    get: function get() {
      return this._style;
    }
  }]);

  return paiHouse;
}(House);

var parentsHouse =
/*#__PURE__*/
function (_House2) {
  _inherits(parentsHouse, _House2);

  function parentsHouse(style, size, roof, color) {
    var _this2;

    _classCallCheck(this, parentsHouse);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(parentsHouse).call(this));
    _this2._style = style;
    _this2._size = size;
    _this2._roof = roof;
    _this2._color = color;
    return _this2;
  }

  _createClass(parentsHouse, [{
    key: "style",
    value: function style() {
      console.log("".concat(this._style, " traditional"));
    }
  }, {
    key: "style",
    get: function get() {
      return this._style;
    }
  }, {
    key: "size",
    get: function get() {
      this._style = style;
    }
  }]);

  return parentsHouse;
}(House);

var pai = new paiHouse('modern', 2, 'grey');
var parents = new parentsHouse('traditional', 2, 'normal', 'white');
var houses = [pai, parents];

for (var _i = 0, _houses = houses; _i < _houses.length; _i++) {
  a = _houses[_i];
  a.yearBuild();
}