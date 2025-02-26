const parentDiv = document.querySelector("#parentDiv");
const gridDiv = document.querySelectorAll(".flexGrid");
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
  
  if (customSize > 0 && customSize <= 100) {
    alert(`Making new grid with size of ${customSize}`);
  } else {
    alert("Try again, use 1-100");
  }
  let gridSize = customSize**2;
  for (let i = 0; i < gridSize; i++) {
    colorGridElement();
  }
}



gridSizeBtn.addEventListener("click", openPrompt);
