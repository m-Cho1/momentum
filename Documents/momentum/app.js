const $title = document.querySelector('.title');

isTitleClicked = true;

function clickTitle() {
 isTitleClicked = !isTitleClicked;
  if (isTitleClicked) {
    $title.style.color = "gold";

  } else {
    $title.style.color = 'red';
  }
}

$title.addEventListener('click', clickTitle);

function mouseEnter() {
  $title.innerHTML = 'Mouse is here!'
  console.log('the mouse has entered');
}

function mouseLeave() {
  $title.innerHTML = 'Mouse left!'
  console.log('the mouse has left');
}

$title.addEventListener('mouseenter', mouseEnter);
$title.addEventListener('mouseleave', mouseLeave);
