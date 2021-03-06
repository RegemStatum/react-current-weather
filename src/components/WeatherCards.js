import React, { useEffect, useCallback } from "react";
import { useGlobalContext } from "../context/app_context";
import WeatherCard from "./WeatherCard";

const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

const WeatherCards = () => {
  const {
    defaultCities,
    isLoading,
    isError,
    isBadRequest,
    fetchCityWeather,
    citiesWeather,
  } = useGlobalContext();

  const fetchDefaultCitiesWeather = useCallback(async () => {
    defaultCities.forEach(async (cityName) => {
      let url = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${cityName}&aqi=no`;
      await fetchCityWeather(url);
    });
  }, [defaultCities, fetchCityWeather]);

  useEffect(() => {
    fetchDefaultCitiesWeather();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (isError) {
    return <h1>Error occured, please try again later</h1>;
  }

  return (
    <>
      {isBadRequest && <h3>Bad request, try another city!</h3>}
      <section className="weather-cards">
        {citiesWeather.map((city, index) => (
          <WeatherCard key={index} {...city} />
        ))}
      </section>
    </>
  );
};

export default WeatherCards;
