import React, { useEffect } from "react";
import { useGlobalContext } from "../context/app_context";
import WeatherCard from "./WeatherCard";

const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

const WeatherCards = () => {
  const { defaultCities, isLoading, isError, fetchCityWeather, citiesWeather } =
    useGlobalContext();

  const fetchDefaultCitiesWeather = async () => {
    defaultCities.forEach(async (cityName) => {
      let url = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${cityName}&aqi=no`;
      await fetchCityWeather(url);
    });
  };

  useEffect(() => {
    fetchDefaultCitiesWeather();
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (isError) {
    return <h1>Error occured, please try again later</h1>;
  }

  return (
    <section className="weather-cards">
      {citiesWeather.map((city, index) => (
        <WeatherCard key={index} {...city} />
      ))}
    </section>
  );
};

export default WeatherCards;
