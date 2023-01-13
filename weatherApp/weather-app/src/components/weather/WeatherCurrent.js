import React from "react";
import "./Weather.css";
import { useWeatherApi } from "../../context/Weather";
import WeatherForecast from "../weatherForecast/WeatherForecast";

function Weather() {
  const { currentWeather, days, forecastWeather } = useWeatherApi();

  // openweatherapp ten saat bılgısını de alalım.
  let offset = currentWeather.timezone; // offset value from OpenWeatherAPI
  let currentTimestamp = Date.now();
  let date = new Date(currentTimestamp + offset * 1000);
  let time = `${date.getUTCHours()}:${date.getUTCMinutes()} | ${
    days[date.getUTCDay()]
  }`;

  return (
    <>
      <div className="weather">
        <div className="currentWeather">
          <nav className="navv">
            <ul className="listt">
              <li className="list_item">
                <a className="navText" type="button">İstanbul</a>
              </li>
              <li>
                <a className="navText" type="button">New York</a>
              </li>
              <li>
                <a className="navText" type="button">Paris</a>
              </li>
              <li>
                <a className="navText" type="button">Roma</a>
              </li>
            </ul>
          </nav>
          <div className="header">
            <div>
              <p className="city">{currentWeather.city}</p>
              <p className="weather-desc">
                {currentWeather.weather[0].description}
              </p>
              <p>{time}</p>
            </div>
            <img
              alt="weather"
              className="weather-icon"
              src={`weather_icons/${currentWeather.weather[0].icon}.png`}
            />
          </div>
        </div>
        <div className="footer ext">
          <div className="tempDiv">
            <span className="temp">
              {Math.round(currentWeather.main.temp)}°C
            </span>
          </div>
          <div className="details">
            <div className="paramater_row">
              <span className="paramater_label title">Details</span>
            </div>
            <div className="paramater_row">
              <span className="paramater_label">Feels Like</span>
              <span className="paramater_value">
                {Math.round(currentWeather.main.feels_like)}°C
              </span>
            </div>
            <div className="paramater_row">
              <span className="paramater_label">Temp Max</span>
              <span className="paramater_value">
                {Math.round(currentWeather.main.temp_max)}°C
              </span>
            </div>
            <div className="paramater_row">
              <span className="paramater_label">Temp Min</span>
              <span className="paramater_value">
                {Math.round(currentWeather.main.temp_min)}°C
              </span>
            </div>
          </div>
        </div>
        <hr />
        {forecastWeather && <WeatherForecast />}
      </div>
    </>
  );
}

export default Weather;
