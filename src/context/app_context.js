import React, { useContext, useReducer, useEffect } from "react";
// reducer
import reducer from "../reducers/app_reducer";
// actions

// react-router
import { useLocation } from "react-router-dom";

const AppContext = React.createContext();

const initialState = {
  defaultCities: ["London", "Kiev", "Moscow"],
  defaultCitiesWeather: [{}],
  citiesWeather: [{}],
  currentCityWeather: {
    name: "",
    picture: "",
    time: "",
    temperature: 0,
    temperatureFeelsLike: 0,
    wind: 0,
  },
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// custom useContext hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
