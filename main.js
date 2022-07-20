

let city = document.querySelector('.cityname')
let btn = document.querySelector('.btn')
let locBtn = document.querySelector('.locBtn')
let output = document.querySelector('.output')

btn.addEventListener('click', checkWeather)

function checkWeather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city.value +
      "&units=metric&appid=cbfc97867f80d30552df7b09b73d666a"
  ).then(response => response.json()).then (data => {
    console.log(data);
    output.innerHTML = data["main"]["temp"] + "°C"+ `<br>` + data['weather'][0]['description'];
    output.getElementsByClassName.cssText = 'background:#c3ffe5; text-align:center; width:150px'
  })
  .catch(err => alert('error'))
}

locBtn.addEventListener('click', showPosition)

function showPosition() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude

      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          lat +
          "&lon=" +
          lon +
          "&units=metric&appid=cbfc97867f80d30552df7b09b73d666a"
      ).then(response => response.json()).then(data => {
        output.innerHTML = `<h4>` + data["main"]["temp"] + "°C and Location: " +data['name']+ `<br>` +data['weather'][0]['description']+`</h4>`;
        output.getElementsByClassName.cssText = 'background:#c3ffe5; text-align:center; width:150px';
      })
      .catch(err => alert('error'))
    })
  }
  else{
    alert("Sorry, your browser does not support HTML5 geolocation.");
  }
}