const $loginForm = document.querySelector('#login-form');
const $loginInput = $loginForm.querySelector('input');
const $greetingH1 = document.querySelector('#greeting');

function onLoginSubmit(event) {
  event.preventDefault();
  const username = $loginInput.value;
  $loginForm.classList.add('hidden')
  console.log("username: ", username);
  $greetingH1.innerHTML = 'Hello ' + username;
  $greetingH1.classList.remove('hidden');
}

$loginForm.addEventListener('submit', onLoginSubmit);
