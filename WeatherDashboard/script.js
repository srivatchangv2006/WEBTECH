const API_KEY = "THE API KEY";
async function getWeather() {
  const city = document.getElementById("city-input").value;
  const weatherCard = document.getElementById("weather-card");

  if (!city) {
    alert("Please enter a city name");
    return;
  }
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("State/City not found");
    }

    const data = await response.json();

    const {name,main: { temp, humidity },weather,wind: { speed },sys: { country },dt} = data;
    const icon = weather[0].icon;
    const desc = weather[0].description;
    const localDate = new Date(dt * 1000).toLocaleString();

    weatherCard.innerHTML = `
      <h2>${name}, ${country}</h2>
      <p>${localDate}</p>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">
      <h3>${temp} °C</h3>
      <p>${desc}</p>
      <p>Humidity: ${humidity}%</p>
      <p>Wind: ${speed} km/h</p>
    `;
  } catch (error) {
    weatherCard.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
