const $loginForm = document.querySelector('#login-form');
const $loginInput = $loginForm.querySelector('input');
const $greetingH1 = document.querySelector('#greeting');

const savedUsername = localStorage.getItem('username');



if (savedUsername === null) {
  $loginForm.classList.remove('hidden');
  $loginForm.addEventListener("submit", onLoginSubmit);

} else {
  $loginForm.classList.add('hidden');
  paintGreetings(savedUsername);
}

function onLoginSubmit(event) {
  event.preventDefault();
  const usernameValue = $loginInput.value;
  $loginForm.classList.add('hidden')
  console.log("username: ", usernameValue);
  localStorage.setItem('username', usernameValue);
  paintGreetings(usernameValue);
}

function paintGreetings(name) {
  $greetingH1.innerText = "Hello " + name;
  $greetingH1.classList.remove("hidden");
}
