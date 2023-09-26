import { renderPage } from "./renderPage.js";
import { addFolder } from "./addFolder.js";
import { todos } from "./addTodos.js";
import "./style.css";

const todosList = new todos();

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
  if (description) {
    todosList.addTodo(newTodo);
    console.log(todosList);
  }
});
