import React from "react";

const Search = () => {
  return (
    <div className="search">
      <form className="search-form">
        <label htmlFor="city-text">Search weather in your city </label>
        <div className="form-input">
          <input type="text" name="city-text" id="city-text" />
          <button type="submit" className="btn btn-submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
