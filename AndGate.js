import Gate from "./Gate.js";

export default class AndGate extends Gate {
  constructor(name, inputs) {
    super(name, inputs);
  }
  operate() {
    return !this.inputs.includes(false);
  }
}
