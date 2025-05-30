const container = document.querySelector(".container");

let setValues = prompt("Pick a number");
const containerH = 956;
const containerW = 956;
const childDivHeight = parseInt(containerH / setValues);
const childDivWidth = parseInt(containerW / setValues);

for (let i = 0; i < setValues; i++) {
  for (let h = 0; h < setValues; h++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = childDivWidth + "px";
    square.style.height = childDivHeight + "px";
    container.appendChild(square);
  }
}
