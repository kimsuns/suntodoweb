const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoButton = todoForm.querySelector("button");

const todoUl = document.getElementById("todo-list");
const completeUl = document.getElementById("complete-list");

let todo = [];
let completetodo = [];

function submitTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };
  todo.push(newTodoObj);
  saveTodo();
  printTodo(newTodoObj);
  todoInput.value = "";
}

function saveTodo() {
  const localStorageTodo = JSON.stringify(todo);
  localStorage.setItem("todolist", localStorageTodo);
}

function completeTodo() {
  const localStorageCompleteTodo = JSON.stringify(completetodo);
  localStorage.setItem("completetodolist", localStorageCompleteTodo);
}

function printTodo(newTodoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const completeBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  todoUl.appendChild(li);
  // li.appendChild(completeBtn);
  // completeBtn.innerText = "완료";

  li.appendChild(span);
  li.id = newTodoObj.id;
  span.innerText = newTodoObj.text;

  li.appendChild(deleteBtn);
  deleteBtn.innerText = "x";

  completeBtn.addEventListener("click", completeTodo);
  deleteBtn.addEventListener("click", deleteTodo);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todo = todo.filter((item) => item.id !== parseInt(li.id));
  saveTodo();
}

function complete(event) {
  const li = event.target.parentElement;
  completeUl.appendChild(li);
  li.id = newTodoObj.id;
  span.innerText = newTodoObj.text;
}

const getTodo = localStorage.getItem("todolist");
if (getTodo !== null) {
  todo = JSON.parse(getTodo);
}

todo.forEach(printTodo);

todoForm.addEventListener("submit", submitTodo);
