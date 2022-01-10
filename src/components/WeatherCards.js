import React, { useEffect } from "react";
import { useGlobalContext } from "../context/app_context";
import WeatherCard from "./WeatherCard";

const WeatherCards = () => {
  const { defaultCities } = useGlobalContext();
  console.log(defaultCities);

  useEffect(() => {}, []);

  return (
    <section className="weather-cards">
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </section>
  );
};

export default WeatherCards;
