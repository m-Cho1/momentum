function onGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log('position: ', 'lat: ',latitude, 'lon: ',longitude);
}

function onGeoErr() {
  alert('Cannot find location. No weather available.')
}



navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoErr);
