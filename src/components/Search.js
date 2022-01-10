import React, { useState } from "react";
// actions
import { SET_SEARCH_CITY } from "../actions";
import { useGlobalContext } from "../context/app_context";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const { dispatch } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: SET_SEARCH_CITY, payload: searchValue });
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
