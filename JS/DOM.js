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

//React manual DOM update

// let card = document.querySelector(".card");
// card.style.display = "flex";
// card.style.gap = "10px";
// card.style.padding = "10px";
// card.style.paddingTop = "30px";

let count = 0;

function updateCounter() {
  count++;

  document.getElementById("count").textContent = count;

  document.getElementById("title").textContent = `Clicked: ${count} times`;

  document.getElementById("status").textContent =
    count > 10 ? "Too many clicks!" : "Keep clicking";

  document.getElementById("newBtn").style.backgroundColor =
    count > 10 ? "red" : "";

  document.getElementById("progress").style.width = `${count}%`;
}

document.getElementById("newBtn").addEventListener("click", updateCounter);

// JSX ✨✨

// What you WRITE (JSX)⬇️⬇️
// const element = <h1 className="title">Hello, World!</h1>;

// What the BROWSER SEES (JavaScript): ❇️❇️
// const element = React.createElement(
//   "h1",                          // tag name
//   { className: "title" },        // props (attributes)
//   "Hello, World!"                // children
// );

// React.createElement() takes 3 main arguments ⬇⬇

// React.createElement(type, props, ...children); ⬅


{/* <div className="card">
  <h2>Title</h2>
  <p>Description</p>
</div> */}

// // Compiles to:
// React.createElement(
//   "div", ⬅⬅ // type
//   { className: "card" }, ⬅⬅ // Props
//   React.createElement("h2", null, "Title"), ⬅ // Children,here Title is also children
//   React.createElement("p", null, "Description") ⬅ // Children, here Description is the children
// );

// // Which returns:
// {
//   type: "div",
//   props: {
//     className: "card",
//     children: [
//       { type: "h2", props: { children: "Title" } },
//       { type: "p", props: { children: "Description" } }
//     ]
//   }
// }

// type: An object containing attributes, properties, or event handlers

// props: An object containing attributes, properties, or event handlers

// ...children : The content inside the element: text, elements, or other children

// Example: React.createElement(
//   "h1",
//   { className: "title" },
//   "Hello Shawn"
// );

// lets create one from the scratch

function createElement(type,props, ...children){
return {
  type,
  props:{
    ...props,
    children: children.map(child=>
      typeof child === 'object'
      ? child 
      : createTextElement(child)
    )
  }
}
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: []
    }
  };
}

// Virtual DOM

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.flat().map(child =>
        typeof child === "object"
          ? child
          : { type: "TEXT", props: { nodeValue: child, children: [] } }
      )
    }
  };
}

function render(vNode, container) {
  // Create real DOM element
  const dom =
    vNode.type === "TEXT"
      ? document.createTextNode(vNode.props.nodeValue)
      : document.createElement(vNode.type);

  // Set properties (skip children)
  Object.keys(vNode.props)
    .filter(key => key !== "children")
    .forEach(key => {
      dom[key] = vNode.props[key];
    });

  // Recursively render children
  vNode.props.children.forEach(child => {
    render(child, dom);
  });

  // Append to container
  container.append(dom);
}

// Complete Flow 

const vNode = {
  type: "div",
  props: {
    id: "root",
    children: [
      {
        type: "TEXT",
        props: {
          nodeValue: "Hello",
          children: []
        }
      }
    ]
  }
};

render(vNode, document.body);

//Result
/*
<body>
  <div id="root">Hello</div>
</body>
*/

// Create virtual DOM
const vApp = createElement(
  "div",
  { id: "app" },
  createElement("h1", null, "Hello!"),
  createElement("p", null, "This is mini React"),
  createElement("button", null, "Click me")
);

// Render to real DOM
render(vApp, document.getElementById("root"));

