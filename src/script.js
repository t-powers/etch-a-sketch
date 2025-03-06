const gridButton = document.querySelector(".gridButton");
const container = document.querySelector(".container");

function gridSize() {
  const gridSize = prompt("Enter grid size, 1-100");
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  createGrid();
}

function createGrid() {
  const gridEl = document.createElement("div");
  gridEl.style.backgroundColor = "black";
  gridEl.classList.add("gridEl");
  gridEl.textContent = "k";
  container.appendChild(gridEl);
}

gridButton.addEventListener("click", gridSize);
