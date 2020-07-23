import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as weatherActions from "./weather.actions";
import { weatherDataSelector } from "./weather.selectors";
import PropTypes from 'prop-types';

const Weather = ({ getWeatherData, weatherData }) => {
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherData.map(({ id, temperature, name }) => {
          return (
            <li className="city" key={id}>
              <span className="city__name">{name}</span>
              <span className="city__temperature">{temperature}</span>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

Weather.propTypes = {
  getWeatherData: PropTypes.func.isRequired,
  weatherData: PropTypes.array
}

const mapState = state => {
  return {
    weatherData: weatherDataSelector(state),
  }
}

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather)
