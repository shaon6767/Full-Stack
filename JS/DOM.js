// querySelector

let h1 = document.querySelector("h1");
h1.style.color = "white";
h1.textContent = "Hellow,this is DOM Learning";
h1.innerHTML = "Hellow";
let button = document.querySelector(".btn");
button.style.backgroundColor = "green";
let id = document.getElementById("root"); //no # needed
id.style.display = "flex";
id.style.alignItems = "center";
id.style.gap = "10px";

// parent,child & sibling

const parent = document.querySelector(".parent");

// Children
parent.children; // HTMLCollection [p, p, p]
parent.firstElementChild; // <p>First</p>
parent.lastElementChild; // <p>Third</p>
parent.childElementCount; // 3

// Parent
const second = parent.children[1];
second.parentElement; // <div class="parent">

// Siblings
second.nextElementSibling; // <p>Third</p>
second.previousElementSibling; // <p>First</p>

// for the same div, getElementByClassName gives HTMLCollection whereas querySelector gives NodeList

// for changing text, use textContent.
// textContent --> whats in the DOM, even with display none, you can read it
// innerText --> becomes invisible with the same thing.

button.classList.add("no");
let No = document.getElementsByClassName("no");
No[0].style.backgroundColor = "blue";

//create elements

let createBtn = document.createElement("button");
createBtn.textContent = "Click Me";
let root = document.getElementById("root");
root.append(createBtn);

let div = document.createElement("div");
div.innerHTML = `<h2>Hellow,this is a new div</h2>`;
root.after(div);

//events

// button.addEventListener("click", function (e) {
//   console.log("Clicked the old button!", e.target);
// });

// createBtn.addEventListener("click", function (e) {
//   e.stopPropagation(); //stops bubbling
//   console.log("Clicked the new button!", e.target, e.currentTarget, e.bubbles);
// });

document.getElementById("grandparent").addEventListener("click", () => {
  console.log("Grandparent");
});
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent");
});
document.getElementById("child").addEventListener("click", () => {
  console.log("Child");
});

// Click the button → Output:
// Child
// Parent
// Grandparent