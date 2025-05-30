const container = document.querySelector(".container");

const setValue = 64;
const containerH = 956;
const containerW = 956;
const childDivHeight = parseInt(containerH / setValue)-2;
const childDivWidth = parseInt(containerW / setValue)-2;

for (let i = 0; i < setValue; i++) {
  for (let h = 0; h < setValue; h++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = childDivWidth + "px";
    square.style.height = childDivHeight + "px";
    container.appendChild(square);
  }
}
