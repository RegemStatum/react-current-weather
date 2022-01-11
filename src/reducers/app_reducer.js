// actions
import {
  ADD_CITY_WEATHER,
  BAD_REQUEST,
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

    let newCitiesWeather = state.citiesWeather.filter((city) => {
      return newCityWeather.name !== city.name;
    });

    return {
      ...state,
      citiesWeather: [newCityWeather, ...newCitiesWeather],
      currentCityWeather: newCityWeather,
    };
  }
  if (action.type === SET_SEARCH_CITY) {
    console.log("search city : ", action.payload);
    return {
      ...state,
      searchCity: action.payload,
    };
  }
  if (action.type === END_OF_LOADING) {
    return {
      ...state,
      isLoading: false,
      isError: false,
      isBadRequest: false,
    };
  }
  if (action.type === ERROR_OCCURED) {
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }
  if (action.type === BAD_REQUEST) {
    return {
      ...state,
      isLoading: false,
      isBadRequest: true,
    };
  }
  throw new Error(`no such as ${action.type} action type`);
};

export default reducer;
