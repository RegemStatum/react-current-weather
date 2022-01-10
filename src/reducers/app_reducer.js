// actions
import {
  ADD_CITY_WEATHER,
  END_OF_LOADING,
  ERROR_OCCURED,
  SET_SEARCH_CITY,
} from "../actions";

const reducer = (state, action) => {
  if (action.type === ADD_CITY_WEATHER) {
    const newCityData = action.payload;
    let {
      location: { name },
      current: {
        condition: { icon },
        last_updated: time,
        temp_c: temperature,
        feelslike_c: temperatureFeelsLike,
        wind_kph: wind,
      },
    } = newCityData;

    time = time.split(" ")[1];

    const newCityWeather = {
      name,
      icon,
      time,
      temperature,
      temperatureFeelsLike,
      wind,
    };

    return {
      ...state,
      citiesWeather: [...state.citiesWeather, newCityWeather],
      currentCityWeather: newCityWeather,
    };
  }
  if (action.type === SET_SEARCH_CITY) {
    console.log(action.payload);
    return {
      ...state,
      searchCity: action.payload,
    };
  }
  if (action.type === END_OF_LOADING) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === ERROR_OCCURED) {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }
  throw new Error(`no such as ${action.type} action type`);
};

export default reducer;
