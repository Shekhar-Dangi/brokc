export default class Gate {
  constructor(name, inputs) {
    this.name = name;
    this.inputs = inputs;
  }
  set inputs(new_inputs) {
    this._inputs = new_inputs;
  }
  get inputs() {
    return this._inputs;
  }
}
