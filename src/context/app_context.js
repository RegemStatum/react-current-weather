import React, { useContext, useReducer, useEffect } from "react";
// reducer
import reducer from "../reducers/app_reducer";
// actions
import { ADD_CITY_WEATHER, END_OF_LOADING, ERROR_OCCURED } from "../actions";

const AppContext = React.createContext();

const initialState = {
  defaultCities: ["London", "Kiev", "Moscow"],
  citiesWeather: [],
  currentCityWeather: {
    name: "",
    icon: "",
    time: "",
    temperature: 0,
    temperatureFeelsLike: 0,
    wind: 0,
  },
  searchCity: "",
  isLoading: true,
  isError: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCityWeather = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: ADD_CITY_WEATHER, payload: data });
      dispatch({ type: END_OF_LOADING });
    } catch (error) {
      dispatch({ type: ERROR_OCCURED });
      dispatch({ type: END_OF_LOADING });
      throw new Error(`${error}`);
    }
  };

  return (
    <AppContext.Provider value={{ ...state, dispatch, fetchCityWeather }}>
      {children}
    </AppContext.Provider>
  );
};

// custom useContext hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
