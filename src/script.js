const parentDiv = document.querySelector("#parentDiv");

for (let i = 0; i < 256; i++) {
  const squareDiv = document.createElement("div");
  squareDiv.classList.add("flexGrid");
  parentDiv.appendChild(squareDiv);
}
