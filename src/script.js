const N = 16;

function addDiv() {
  for (let i = 0; i < N; i++) {
    const newDiv = document.createElement("div");

    // Set the new div's id
    newDiv.id = "myNewDiv";

    newDiv.innerHTML = " ";

    // Get the parent div element
    const parentDiv = document.getElementById("myParentDiv");

    parentDiv.appendChild(newDiv);
  }
}
