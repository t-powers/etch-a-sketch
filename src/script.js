const gridButton = document.querySelector(".gridButton");
const container = document.querySelector(".container");

function gridSize() {
  const gridSize = prompt("Enter grid size, 1-100");
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  createGrid();
}

gridButton.addEventListener("click", gridSize);

/* 
Prompt grid size, assign number to variable
Add size to inline style - col, row
Call hover function
Create hover function
Add div using createElement
 */
