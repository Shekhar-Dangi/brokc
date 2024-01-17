import Box from "./Box.js";
import Wire from "./Wire.js";

const gate = new Box("and_gate", "AND", 2, 1);
gate.draw();
console.log(gate.x_left);
console.log(gate.x_right);

const wire = new Wire(gate, 1, 0);
wire.draw();
const wire2 = new Wire(gate, 0, 0);
wire2.draw();
