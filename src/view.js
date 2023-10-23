function displayData(value) {
  const weatherCard = document.querySelector(".weather-card");
  const icon = document.querySelector(".icon");
  const countryName = document.querySelector(".location");
  const temp = document.querySelector(".temp");
  const tempFelt = document.querySelector(".temp-felt");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".wind");

  if (value) {
    weatherCard.style.display = "block";

    countryName.textContent = `${value.location.name}, ${value.location.country}`;
    icon.src = value.current.condition.icon;
    temp.textContent = value.current.temp_c + "°C";
    tempFelt.textContent = "Feels like: " + value.current.feelslike_c + "°C";
    humidity.textContent = "Humidity: " + value.current.humidity + "%";
    wind.textContent = "Wind: " + value.current.wind_kph + " km/h";
    console.log(value);
  }
}

export default displayData;
