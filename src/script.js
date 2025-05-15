const container = document.querySelector(".container");
const content = document.createElement("div");
const p = document.createElement("p");
const h3 = document.createElement("h3");
const pinkDiv = document.createElement("div");
const h1 = document.createElement("h1");
const p1 = document.createElement("p");

content.classList.add("content");
content.textContent = "Hello World";

p.classList.add("p-class");
p.style.color = "red";
p.textContent = "Hey I'm red!";

h3.classList.add("h-class");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";

pinkDiv.classList.add("pink-div");
pinkDiv.style.border = "1px solid black";
pinkDiv.style.backgroundColor = "pink";

h1.classList.add("h1-class");
h1.textContent = "I'm in a div";
h1.style.border = "1px solid black";


p1.classList.add("p1-class");
p1.textContent = "ME TOO!";

pinkDiv.appendChild(h1);
pinkDiv.appendChild(p1);

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(pinkDiv);
