
import { createContext, useContext, useState, } from "react";



const WeatherApiContext = createContext()

const WeatherProvider = ({ children }) => {

    
    const [city, setCity] = useState("")
    //
   

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