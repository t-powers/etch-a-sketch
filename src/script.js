const container = document.querySelector(".container");

const setValue = 5;

for (let i = 0; i < setValue; i++) {
  for (let h = 0; h < setValue; h++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.border = "1px solid black";
    square.style.width = "238px";
    square.style.height = "238px";
    container.appendChild(square);
  }
}
