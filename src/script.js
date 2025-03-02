const parentDiv = document.querySelector("#parentDiv");
const gridSizeBtn = document.querySelector("button");

function colorGridElement() {
  const squareDiv = document.createElement("div");
  squareDiv.classList.add("flexGrid");
  squareDiv.addEventListener("mouseover", () => {
    squareDiv.style.backgroundColor = "black";
  });
  let gridSize = parentSize;
  for (let i = 0; i < gridSize * gridSize; i++) {}
  parentDiv.appendChild(squareDiv);
}

function openPrompt() {
  let customSize = parseInt(
    prompt("Enter integer for custom grid size. 1 to 100")
  );
  let parentSize = 400 / customSize;
  if (customSize > 0 && customSize <= 100) {
    alert(`Making new grid with size of ${customSize}`);
  } else {
    alert("Try again, use 1-100");
  }
  colorGridElement(customSize);
}

gridSizeBtn.addEventListener("click", openPrompt);
