const gridButton = document.querySelector(".gridButton");

function gridSize() {
  const gridSize = prompt("Enter grid size, 1-100");
  console.log(gridSize);
}

gridButton.addEventListener("click", gridSize);
