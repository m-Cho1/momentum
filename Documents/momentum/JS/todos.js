const $todoForm = document.getElementById('todo-form');
const $todoList = document.getElementById('todo-list');
const $todoInput = $todoForm.querySelector('input');

function renderTodo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.appendChild(span);
  span.innerText = newTodo;
  $todoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  console.log('todo input value: ', $todoInput.value)
  const newTodoInput = $todoInput.value;
  $todoInput.value = '';
  renderTodo(newTodoInput);
}

$todoForm.addEventListener("submit", handleTodoSubmit);
