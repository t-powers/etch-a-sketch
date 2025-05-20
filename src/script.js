const container = document.querySelector(".container");

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid");
    container.appendChild(gridSquare);
  }
}
