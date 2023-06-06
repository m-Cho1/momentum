const $todoForm = document.getElementById('todo-form');
const $todoList = document.getElementById('todo-list');
const $todoInput = $todoForm.querySelector('input');

const todosStorage = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todosStorage));
}

function deleteTodo(event) {
  const deleteLi = event.target.parentElement;
  deleteLi.remove();
}

function renderTodo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  const button = document.createElement('button');
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
  todosStorage.push(newTodoInput);
  renderTodo(newTodoInput);
  saveTodos();
}

$todoForm.addEventListener("submit", handleTodoSubmit);
