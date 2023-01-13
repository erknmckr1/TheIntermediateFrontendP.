import React from "react";
import "./navbar.css";
import { useWeatherApi } from "../../context/Weather";
import { AsyncPaginate } from "react-select-async-paginate";

function Navbar({ onSearchChange }) {
  const { city, setCity, cityDetailsApi, geoApiUrl } = useWeatherApi();

  //Aradıgımız sehrın api den gerekli bilgilerini çekelim.
  const loadOptions = (inputValue) => {
    // inputValue arama yapmak ıstedıgımız terimi temsil ediyor(İnputa yazdıgımız). Asyncpaginate komponenti tarafından otomatik sağlanır ve loadOptions fonksıyonuna gonderılır.
    return fetch(
      `${geoApiUrl}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      cityDetailsApi
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude},${city.longitude}`,
              label: `${city.name} , ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    // searchData apiden cektıgımız verılerı ıcerır.(lat_log - city_info)
    setCity(searchData);
    onSearchChange(searchData);
  };
  return (
    //(asyncPaginate componenti nedir ? README)
    <AsyncPaginate
      className="navbar"
      placeholder="Search for city"
      loadingMessage={() => "Searching..."}
      debounceTimeout={800} // geciktirme fonksıyonu, yapacagımız ıstegı 600 ms gecıktırecek.
      value={city}
      onChange={handleOnChange} // veri girdisi degıstıgınde calısacak fonksıyon
      loadOptions={loadOptions}
    />
  );
}

export default Navbar;
