
import { createContext, useContext, useState, } from "react";



const WeatherApiContext = createContext()

const WeatherProvider = ({ children }) => {

    
    const [city, setCity] = useState(null)
    //
    const cityDetailsApi = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4dfee1b538mshf3e225b2df6d084p1a559djsn69945ba46169',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };
    const geoApiUrl ='https://wft-geo-db.p.rapidapi.com/v1/geo'

    const weatherApiUrl = 'https://api.openweathermap.org/data/2.5'
    const weatherApiKey = '2d25b062c228857098a45d3b1936fda2'

    const [currentWeather,setCurrentWeather] = useState(null)
    const [forecastWeather,setForecastWeather] = useState(null)

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // apiden alacagımız gun rakam olarak donecek o rakamı bu dızıdekı eleman ıle eslestırecegız.
    const collapseCoutn = ['One','Two','Three','Four','Five','Six','Seven']

    
  //

    const values = {
        setCity,
        city,
        geoApiUrl,
        cityDetailsApi,
        weatherApiUrl,
        weatherApiKey,
        currentWeather,
        setCurrentWeather,
        forecastWeather,
        setForecastWeather,
        days,
        collapseCoutn
        
    }

    return (
        <WeatherApiContext.Provider value={values}>
            {children}
        </WeatherApiContext.Provider>
    )
}

const useWeatherApi = () => {
    return useContext(WeatherApiContext)
};

export { WeatherProvider, useWeatherApi };  