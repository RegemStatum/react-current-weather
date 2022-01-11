import React, { useState } from "react";
// actions
import { SET_SEARCH_CITY, ADD_CITY_WEATHER } from "../actions";

import { useGlobalContext } from "../context/app_context";

const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const { dispatch, fetchCityWeather } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${searchValue}&aqi=no`;
    fetchCityWeather(url);
    setSearchValue("");
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="city-text">Search weather in your city </label>
        <div className="form-input">
          <input
            type="text"
            name="city-text"
            id="city-text"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button type="submit" className="btn btn-submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
