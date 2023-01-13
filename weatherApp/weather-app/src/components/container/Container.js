import Navbar from "../navbar/Navbar";
import "./container.css";
import WeatherCurrent from "../weather/WeatherCurrent";
import { useWeatherApi } from "../../context/Weather";

function Container() {
  const {
    weatherApiUrl,
    weatherApiKey,
    currentWeather,
    setCurrentWeather,
    setForecastWeather,
  } = useWeatherApi();

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(","); /* * ** * * ** * */
    const currentWeatherFetch = fetch(
      `${weatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric` // anlık hava durumu verılerı
    );
    const forecastWeatherFetch = fetch(
      `${weatherApiUrl}/forecast/?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`// hava durumu tahmın verılerı
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecastWeather({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <div className="container">
      <Navbar onSearchChange={handleOnSearchChange} />
      {currentWeather && <WeatherCurrent/>}
     
    </div>
  );
}

export default Container;
