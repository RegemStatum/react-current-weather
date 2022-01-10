import React from "react";

const WeatherCard = ({
  name,
  icon,
  time,
  temperature,
  temperatureFeelsLike,
  wind,
}) => {
  return (
    <article className="weather-card">
      <h2 className="city-name">{name}</h2>
      <div>
        <img className="weather-icon" src={icon} alt="weather" />
        <p className="time">{time}</p>
      </div>
      <p className="temperature">
        Temperature (C): <span>{temperature}</span>
      </p>
      <p className="temperature-feels-like">
        Feels like: <span>{temperatureFeelsLike}</span>
      </p>
      <p className="wind">
        Wind (kph): <span>{wind}</span>
      </p>
    </article>
  );
};

export default WeatherCard;
