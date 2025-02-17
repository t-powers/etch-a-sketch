const parentDiv = document.querySelector("#parentDiv");
const gridDiv = document.querySelectorAll(".flexGrid");


function colorGridElement() {
  const squareDiv = document.createElement("div");
  squareDiv.classList.add("flexGrid");
  squareDiv.addEventListener("mouseover", () => {
    squareDiv.style.backgroundColor = "black";
  });
  parentDiv.appendChild(squareDiv);
}

for (let i = 0; i < 256; i++) {
  colorGridElement();
}