export default class Box {
  constructor(id, text, total_inputs, total_outputs) {
    this.id = id;
    this.text = text;
    this.total_inputs = total_inputs;
    this.total_outputs = total_outputs;
  }
  draw() {
    const gate = document.createElement("div");
    gate.id = this.id;
    Object.assign(gate.style, {
      border: "2px solid black",
      padding: "5px",
      width: "70px",
      height: "70px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    });

    gate.appendChild(document.createTextNode(this.text));

    document.getElementById("circuit-board").appendChild(gate);
  }

  get x_left() {
    const gate = document.getElementById(this.id);
    return gate.getBoundingClientRect().x;
  }
  get y_top() {
    const gate = document.getElementById(this.id);
    return gate.getBoundingClientRect().y;
  }
  get x_right() {
    const gate = document.getElementById(this.id);
    return gate.getBoundingClientRect().right;
  }
  get y_bottom() {
    const gate = document.getElementById(this.id);
    return gate.getBoundingClientRect().bottom;
  }
}
