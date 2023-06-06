const $todoForm = document.getElementById('todo-form');
const $todoList = document.getElementById('todo-list');
const $todoInput = $todoForm.querySelector('input');

function deleteTodo(event) {
  console.log('delete!', event.target.parentElement.innerText)
}

function renderTodo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');
  button.innerText = "❌";
  button.addEventListener('click', deleteTodo)
  li.appendChild(span);
  li.appendChild(button);
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
