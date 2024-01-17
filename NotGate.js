import Gate from "./Gate.js";

export default class NotGate extends Gate {
  constructor(name, inputs) {
    super(name, inputs);
  }
  operate() {
    return !this.inputs[0];
  }
}
