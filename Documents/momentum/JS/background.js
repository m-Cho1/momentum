const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg"
];

const randomImg = images[Math.floor(Math.random() * images.length)];

const $bgImage = document.createElement('img');
$bgImage.setAttribute('class', 'background');
$bgImage.src = `img/${randomImg}`;

document.body.appendChild($bgImage);
