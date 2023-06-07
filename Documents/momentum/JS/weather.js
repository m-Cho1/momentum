const API_KEY = "3452575787388279129325243f4018fe";

function onGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`;

  fetch(url)
  .then(response => response.json())
  .then((data) => {
    const weather = document.querySelector('.weather');
    const location = document.querySelector('.location');
    const temperature = document.querySelector('.temperature');
    const name = data.name;
    weather.innerText = data.weather[0].main;
    location.innerText = data.name;
    temperature.innerText = data.main.temp + " ℉";
    console.log(name, weather)
  });
}

https: function onGeoErr() {
  alert("Cannot find location. No weather available.");
}



navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoErr);
