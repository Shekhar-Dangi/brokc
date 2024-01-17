export default class Wire {
  static width = "25px";
  static width_num = 25;
  constructor(attached_to, position, behaviour) {
    this.attached_to = attached_to;
    this.position = position;
    this.behaviour = behaviour;
  }
  draw() {
    const wire = document.createElement("div");
    Object.assign(wire.style, {
      width: Wire.width,
      border: "2px solid black",
      position: "fixed",
    });
    if (this.behaviour == 0) {
      if (this.position == 0) {
        wire.style.left = this.attached_to.x_left - Wire.width_num - 2 + "px";
        wire.style.top = this.attached_to.y_top + Wire.width_num + "px";
      } else {
        wire.style.left = this.attached_to.x_left - Wire.width_num - 2 + "px";
        wire.style.top = this.attached_to.y_bottom - Wire.width_num + "px";
      }
    } else {
      wire.style.left = this.attached_to.x_right + "px";
      wire.style.top = this.attached_to.y_top + Wire.width_num + "px";
    }
    document.getElementById("circuit-board").appendChild(wire);
  }
}
