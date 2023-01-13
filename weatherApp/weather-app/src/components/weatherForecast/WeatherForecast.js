import React from "react";
import "./WeatherForecast.css";
import { useWeatherApi } from "../../context/Weather";
function WeatherForecast() {
  const { forecastWeather, days, collapseCoutn } = useWeatherApi();
  const currentDay = new Date().getDay(); // Mevcur günü index numarası olarak döndürür.

  const goSevenDaysFromCurrentDay = days // günlerin bulungu dızıyı mevcut gunden baslayarak 7 gun olacak sekılde sıraladıık
    .slice(currentDay, days.lenght)
    .concat(days.slice(0, currentDay));

  console.log(forecastWeather);
  
  // Bir gün için dört farklı hava durumu elde edelim. 
  const forecastFiltered = forecastWeather.list.filter((item, index)=>{
   const hourPeriods=[6,12,18,24]
   const date = new Date(item.dt * 1000)
   const hour = date.getUTCHours();
   return hourPeriods.includes(hour);
  })

  return (
    <>
      <span className="title">Daily Weather</span>
      <div className=" accordion accordion-flush" id="accordionFlushExample">
        {forecastWeather.list.slice(0, 7).map((item, index) => {
          const date = new Date(item.dt * 1000)
          const currentDay = date.toDateString();
          const hour = date.getUTCHours();
          console.log(currentDay)
          console.log(hour)
          console.log(date)
          return (
          <div className="accordion-item" key={index}>
            <button
              className="accordion-button collapsed Accor"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse${collapseCoutn[index]}`}
              aria-expanded="false"
              aria-controls={`flush-collapse${collapseCoutn[index]}`}
            >
              <div className="daily-weather">
                <span className="day">
                  {goSevenDaysFromCurrentDay[index]} |
                </span>
                <img
                  alt="weather"
                  className="forecastImg"
                  src={`weather_icons/${item.weather[0].icon}.png`}
                />
                <span className="weatherDesc">
                  | {item.weather[0].description}
                </span>
                <span className="min-max">
                  | {item.main.temp_min.toFixed(1)}°C /{" "}
                  {item.main.temp_max.toFixed(1)}°C
                </span>
              </div>
            </button>
            <div
              id={`flush-collapse${collapseCoutn[index]}`}
              className="accordion-collapse collapse"
              aria-labelledby={`flush-heading${collapseCoutn[index]}`}
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
              {forecastFiltered.filter(item=>{
                const forecastDate = new Date(item.dt * 1000).toDateString();
                return forecastDate===currentDay;
              }).map((forecast, index) => (
                <div key={index} className="hourly-forecast">
                  <span className="hour">{new Date(forecast.dt * 1000).getUTCHours()}:{new Date(forecast.dt * 1000).getUTCMinutes()}</span>
                  <img
                    alt="weather"
                    className="forecastImg"
                    src={`weather_icons/${forecast.weather[0].icon}.png`}
                  />
                  <span className="weatherDesc">{forecast.weather[0].description}</span>
                  <span className="temperature">
                    {forecast.main.temp.toFixed(1)}°C
                  </span>
                </div>
              ))}
              </div>
            </div>
          </div>
        )})}
      </div>
    </>
  );
}

export default WeatherForecast;
