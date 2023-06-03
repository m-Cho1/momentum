const $loginForm = document.querySelector('#login-form');
const $loginInput = $loginForm.querySelector('input');
const $greetingH1 = document.querySelector('#greeting');

const savedUsername = localStorage.getItem('username');



if (savedUsername === null) {
  $loginForm.classList.remove('hidden');
  $loginForm.addEventListener("submit", onLoginSubmit);

} else {
  paintGreetings();
}

function onLoginSubmit(event) {
  event.preventDefault();
  const usernameValue = $loginInput.value;
  $loginForm.classList.add('hidden')
  localStorage.setItem('username', usernameValue);
  paintGreetings();
}

function paintGreetings() {
  const value = localStorage.getItem("username")
  $greetingH1.innerText = "Hello " + value;
  $greetingH1.classList.remove("hidden");
}
