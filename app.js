// ========== INSTANTIATE SELECTED VARIABLES =============
let ul = document.querySelector(".todos");
let input = document.querySelector(".todo");
let button = document.querySelector(".enter");
let undoBtn = document.querySelector(".undo-btn");

// ========= VARIABLE MANIPULATION ================

// shorthand cleaner code, more concise
let inputLength = function () {
  return input.value.length;
};

// create todo "generator" function
let createTodo = function (e) {
  if (inputLength) {
    let li = document.createElement("li");
    let text = document.createTextNode(input.value);
    li.appendChild(text);
    ul.appendChild(li);

    // Create Delete Button
    let delBtn = document.createElement("button");
    let delText = document.createTextNode("delete");
    delBtn.appendChild(delText);
    li.appendChild(delBtn);
    ul.appendChild(li);

    // Create Doen Button
    let doneBtn = document.createElement("button");
    let doneText = document.createTextNode("done");
    doneBtn.appendChild(doneText);
    li.appendChild(doneBtn);
    ul.appendChild(li);

    doneBtn.addEventListener("click", (e) => {
      li.classList.toggle("done");
    });

    delBtn.addEventListener("click", () => {
      li.classList.add("remove");
      undoBtn.classList.add("show-btn");
      ul.style.marginTop = "5rem";
      undoBtn.addEventListener("click", () => {
        li.classList.remove("remove");
        undoBtn.classList.remove("show-btn");
        ul.style.marginTop = "1rem";
      });
    });

    input.value = "";
  }
};

// create todo when I press the enter key
let createOnEnter = function (e) {
  if (input.value == "") {
    return;
  } else if (inputLength && e.key === "Enter") {
    createTodo();
  } else {
    return;
  }
};

// create todo when I click the button
let createOnClick = function () {
  if (input.value == "") {
    return;
  }
  if (inputLength) {
    createTodo();
  }
};

// ================= Event Listeners ==============
// take action when a Keyboard Event is triggered

// input manipulation
input.addEventListener("keydown", createOnEnter);

// button manipulation
button.addEventListener("click", createOnClick);

// =============== Reflection ====================
