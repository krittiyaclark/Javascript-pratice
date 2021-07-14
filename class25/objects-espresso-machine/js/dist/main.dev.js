"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
var EspressoMachine =
/*#__PURE__*/
function () {
  function EspressoMachine(color, make, model, price) {
    _classCallCheck(this, EspressoMachine);

    this.color = color;
    this.model = model;
    this.make = make;
    this.price = price;
  }

  _createClass(EspressoMachine, [{
    key: "start",
    value: function start() {
      console.log('Starting machine');
    }
  }, {
    key: "stop",
    value: function stop() {
      console.log('Stoping machine');
    }
  }, {
    key: "steam",
    value: function steam() {
      console.log('Steaming machine');
    }
  }]);

  return EspressoMachine;
}();

var gaggia = new EspressoMachine('silver', 'Gagie', 'Classic Pro', 500);