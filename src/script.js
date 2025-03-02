const parentDiv = document.querySelector("#parentDiv");
const gridDiv = document.querySelector(".flexGrid");
const gridSizeBtn = document.querySelector("button");

function colorGridElement() {
  const squareDiv = document.createElement("div");
  squareDiv.classList.add("flexGrid");
  squareDiv.addEventListener("mouseover", () => {
    squareDiv.style.backgroundColor = "black";
  });
  parentDiv.appendChild(squareDiv);
}

function openPrompt() {
  let customSize = prompt("Enter integer for custom grid size. 1 to 100");
  let parentSize = 400 / customSize;
  if (customSize > 0 && customSize <= 100) {
    alert(`Making new grid with size of ${customSize}`);
  } else {
    alert("Try again, use 1-100");
  }
  let gridSize = parentSize;
  for (let i = 0; i < gridSize**2; i++) {
    colorGridElement();
  }
}

gridSizeBtn.addEventListener("click", openPrompt);
