import { renderPage } from "./renderPage.js";
import { addFolder } from "./addFolder.js";
import { todos } from "./addTodos.js";
import "./style.css";

const todosList = new todos();
renderPage();

const addTodoBtn = document.querySelector("#submit");
addTodoBtn.addEventListener("click", () => {
  const id = `id${String(Math.random().toString(16))}`;
  const title = document.querySelector("#title").value.trim();
  const description = document.querySelector("#description").value.trim();
  const priority = document.querySelector("#priority").value;
  const duedate = document.querySelector("#duedate").value;

  const newTodo = {
    id,
    title,
    description,
    priority,
    duedate,
  };
  if (title) {
    todosList.addTodo(newTodo);
    form.style.display = "none";
    add.style.display = "block";
    renderPage();
  }
});

// Add new book button
const form = document.querySelector("#form");
const add = document.querySelector("#add");
add.addEventListener("click", () => {
  event.preventDefault();
  form.style.display = "grid";
  add.style.display = "none";
});
