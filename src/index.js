import { renderPage } from "./renderPage.js";
import { addFolder } from "./addFolder.js"
import { todos } from "./addTodos.js"
import "./style.css"

const todosList = new todos();

const addTodoBtn = document.querySelector('#submit');
addTodoBtn.addEventListener('click', () => {
  const id = `id${Math.random().toString(16).slice(2)}`;
  const description = document.querySelector('#description').value.trim();
  const priority = document.querySelector('#priority').value;
  
  const completed = false;
  const index = todosList.list.length + 1;

  const newTodo = {
    id, description, completed, index,
  };
  if (description) {
    todosList.addTodo(newTodo);
    console.log(todosList);
  }
});
