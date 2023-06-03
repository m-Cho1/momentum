const $clock = document.getElementById('clock');

function getTime() {
  const date = new Date();
  $clock.innerText = (`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`)
}

getTime();
setInterval(getTime, 1000)
