import { GET_WEATHER_DATA } from "./weather.actions";

const initialData = {
  weatherData: []
}

const weatherReducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_WEATHER_DATA: {
      return {
        ...state,
        weatherData: action.payload.weatherData,
      }
    }
    default:
      return state;
  }
};

export default weatherReducer;
