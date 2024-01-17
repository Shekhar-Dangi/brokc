import Gate from "./Gate.js";

export default class OrGate extends Gate {
  constructor(name, inputs) {
    super(name, inputs);
  }
  operate() {
    return this.inputs.includes(true);
  }
}
