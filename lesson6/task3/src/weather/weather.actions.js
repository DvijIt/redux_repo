export const GET_WEATHER_DATA = "GET_WEATHER_DATA";
import { fetchWeatherData } from './weather.gateway';

export const setWeatherData = (weatherData) => {
  return {
    type: GET_WEATHER_DATA,
    payload: {
      weatherData
    }
  };
};

export const getWeatherData = () => {
  return function(dispatch) {
    fetchWeatherData().then((weatherData) => {
      dispatch(setWeatherData(weatherData));
    });
  };
};