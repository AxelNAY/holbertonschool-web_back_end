const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const ClonedCar = this.constructor[cloneSymbol] || this.constructor;
    return new ClonedCar();
  }

  static get [cloneSymbol]() {
    return this;
  }
}