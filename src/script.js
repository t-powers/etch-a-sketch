const parentDiv = document.querySelector("#parentDiv");
const gridDiv = document.querySelectorAll(".flexGrid");
const gridSize = document.querySelector("button")

function colorGridElement() {
  const squareDiv = document.createElement("div");
  squareDiv.classList.add("flexGrid");
  squareDiv.addEventListener("mouseover", () => {
    squareDiv.style.backgroundColor = "black";
  });
  parentDiv.appendChild(squareDiv);
}

function openPrompt(){
  let gridSize = prompt("Enter integer for custom grid size. n<=100")
  alert(gridSize)
}

for (let i = 0; i < 256; i++) {
  colorGridElement();
}

gridSize.addEventListener("click",openPrompt)