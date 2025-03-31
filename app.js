// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

// Functions
function addTodo(event) {
  // Prevent form from submitting
  event.preventDefault();
  // console.log("Hello");
  // Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Todo LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // Checkmark Button
  const completedButton = document.createElement("button");
  completedButton.classList.add("complete-btn");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  todoDiv.appendChild(completedButton);

  // Trash Button
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  todoDiv.appendChild(trashButton);

  // Append to List
  todoList.appendChild(todoDiv);

  // Clear Todo Input Value
  todoInput.value = "";
}

// Delete & Check
function deleteCheck(e) {
  const item = e.target;
  // // Delete Todo with setTimeout
  // if (item.classList[0] === "trash-btn") {
  //   const todo = item.parentElement;
  //   // Animation
  //   todo.classList.add("fall");
  //   setTimeout(() => {
  //     todo.remove();
  //   }, 500);
  // }
  // Delete Todo with transitionend
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
  // Check Mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

//Filter Todo
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    if (todo.nodeType === Node.ELEMENT_NODE) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
      }
    }
  });
}

