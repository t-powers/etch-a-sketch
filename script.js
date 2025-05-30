const container = document.querySelector(".container");
const valueButton = document.querySelector(".gridSizeButton");
const restart = document.querySelector(".resetGrid");

valueButton.addEventListener("click", () => {
  // removes existing divs from setValues prompt
  container.replaceChildren();

  let setValues = prompt("Pick a number");
  const containerH = 960;
  const containerW = 960;
  const childDivHeight = parseInt(containerH / setValues);
  const childDivWidth = parseInt(containerW / setValues);

  if (setValues > 3 && setValues < 101) {
    for (let i = 0; i < setValues; i++) {
      for (let h = 0; h < setValues; h++) {

        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = childDivWidth + "px";
        square.style.height = childDivHeight + "px";
        container.appendChild(square);

        // draw in black only - just for now
        square.addEventListener("mouseover", () => {
          square.style.background = "black";
        });

        // click square to erase color
        square.addEventListener("click", () => {
          square.style.background = "";
        });
        
        // click to remove all color and start over
        restart.addEventListener("click", () => {
          square.style.background = "";
        });
      }
    }
  } else {
    alert("Enter number between 4 and 100");
  }
});
