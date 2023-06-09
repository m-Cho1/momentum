const $todoForm = document.getElementById('todo-form');
const $todoList = document.getElementById('todo-list');
const $todoInput = $todoForm.querySelector('input');

const TODOS_KEY = 'todos';

let todosStorage = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todosStorage));
}

function deleteTodo(event) {
  const deleteLi = event.target.parentElement;
  deleteLi.remove();
  todosStorage = todosStorage.filter(todo => todo.id !== parseInt(deleteLi.id));
  saveTodos();
}

function renderTodo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('button');
  button.setAttribute('class', 'deleteBtn');
  button.innerText = "❌";
  button.addEventListener('click', deleteTodo)
  li.appendChild(span);
  li.appendChild(button);
  $todoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  console.log('todo input value: ', $todoInput.value)
  const newTodoInput = $todoInput.value;
  $todoInput.value = '';

  const newTodoObj = {
    text: newTodoInput,
    id: Date.now()
  };
  todosStorage.push(newTodoObj);
  renderTodo(newTodoObj);
  saveTodos();
}

$todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todosStorage = parsedTodos;
  parsedTodos.forEach(renderTodo);
}
