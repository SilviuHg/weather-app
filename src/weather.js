const searchCity = async function (city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=b71f41dafa2d4d43a25113229231110&q=${city}`,
      { mode: "cors" }
    );

    if (!response.ok) {
      throw new Error("City not found or other API error");
    }

    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.error(error);
    alert(error);
    return null;
  }
};

export default searchCity;
