import React from "react";

const WeatherCard = () => {
  return (
    <article className="weather-card">
      <h2 className="city-name">Kiev</h2>
      <div>
        <img
          className="weather-icon"
          src="//cdn.weatherapi.com/weather/64x64/night/122.png"
          alt="weather"
        />
        <p className="time">18:15</p>
      </div>

      <p className="temperature">Temperature (C): 8.0</p>
      <p className="temperature-feels-like">Feels like: 6.9</p>
      <p className="wind">Wind (kph): 11.2</p>
    </article>
  );
};

export default WeatherCard;
