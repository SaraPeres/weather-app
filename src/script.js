function searchCity(city) {
    let apiKey = "d3565a1a83ca66a70607e27406dc0152";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(showWeather);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#enter-city");
  
    searchCity(city.value);
  }
  
  function showWeather(response) {
    console.log(response.data);
  
    document.querySelector("#city-heading").innerHTML = `${response.data.name}`;
  
    document.querySelector("#temperature").innerHTML = `${Math.round(
      response.data.main.temp
    )}°`;
  
    document.querySelector("#current-weather-description").innerHTML = `${
      response.data.weather[0].main
    } `;
  
    document.querySelector("#current-min-temp").innerHTML = `${Math.round(
      response.data.main.temp_min
    )}°`;
  
    document.querySelector("#current-max-temp").innerHTML = `${Math.round(
      response.data.main.temp_max
    )}°`;

    document.querySelector("#current-weather-icon").setAttribute('src', `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  }
  
  function getCelsius(event) {
    event.preventDefault();
    let city = document.querySelector("#enter-city");
  
    let apiKey = "d3565a1a83ca66a70607e27406dc0152";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${
      city.value
    }&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(showCelsius);
  }
  
  function showCelsius(response) {
    let tempHeading = document.querySelector("#temperature");
    let currentTemp = Math.round(response.data.main.temp);
    tempHeading.innerHTML = `${currentTemp}°`;
  }
  
  function getFahrenheit(event) {
    event.preventDefault();
    let city = document.querySelector("#enter-city");
  
    let apiKey = "d3565a1a83ca66a70607e27406dc0152";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${
      city.value
    }&appid=${apiKey}&units=imperial`;
  
    axios.get(apiUrl).then(showFahrenheit);
  }
  
  function showFahrenheit(response) {
    let tempHeading = document.querySelector("#temperature");
    let currentTemp = Math.round(response.data.main.temp);
    tempHeading.innerHTML = `${currentTemp}°`;
  }
  
  let cityForm = document.querySelector("#search-city-form");
  cityForm.addEventListener("submit", handleSubmit);
  
  let now = new Date();
  
  let dayWeek = now.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
  
  let dayMonth = now.getDate();
  
  let month = now.getMonth();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  
  let year = now.getFullYear();
  
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  
  let currentDate = document.querySelector("#date");
  currentDate.innerHTML = `${days[dayWeek]}, ${dayMonth} ${
    months[month]
  } ${year} ${hour}:${minutes}`;
  
  let tempCelsius = document.querySelector("#celsius");
  tempCelsius.addEventListener("click", getCelsius);
  
  let tempFahrenheit = document.querySelector("#fahrenheit");
  tempFahrenheit.addEventListener("click", getFahrenheit);

  searchCity("Porto");
  