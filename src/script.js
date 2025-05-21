const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
const gridSizeButton = document.querySelector(".gridSizeButton");

gridSizeButton.addEventListener("click", () => {
  const gridSize = prompt("Choose a number between 0 and 64.");
  alert(gridSize);
});

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid");
    container.appendChild(gridSquare);
    gridSquare.addEventListener("mouseover", (e) => {
      e.target.style.background = "black";
    });
  }
}
