const gridButton = document.querySelector(".gridButton");
const container = document.querySelector(".container");

function gridSize() {
  const gridSize = prompt("Enter grid size, 1-100");
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  console.log(gridSize);
}

gridButton.addEventListener("click", gridSize);
