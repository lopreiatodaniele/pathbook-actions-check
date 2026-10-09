import { nextCount } from "./counter.js";

const countView = document.getElementById("count");
const room = document.getElementById("room");
const controls = document.getElementById("controls");
const add = document.getElementById("add");
const remove = document.getElementById("remove");
const reset = document.getElementById("reset");
if ([countView, room, controls, add, remove, reset].includes(null)) {
  throw new Error("Missing counter structure");
}

let count = 0;
function render() {
  countView.textContent = "Count: " + count;
}
add.addEventListener("click", () => {
  count = nextCount(count, 1);
  render();
});
remove.addEventListener("click", () => {
  count = nextCount(count, -1);
  render();
});
reset.addEventListener("click", () => {
  count = 0;
  render();
});
room.textContent = import.meta.env.VITE_ROOM_LABEL || "Practice room";
render();
controls.hidden = false;
