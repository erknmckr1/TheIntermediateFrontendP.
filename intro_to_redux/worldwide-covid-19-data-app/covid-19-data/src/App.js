


import "./App.css";

import Statistics from "./page/Statistics";
function App() {
//   const dispatch = useDispatch()
//   const {countries,selectedCountry,status} = useSelector(state=> state.covidInfo)
//  console.log(selectedCountry)
//  console.log(status)


//   useEffect(()=>{
//     dispatch(getCountries())
//   },[dispatch])
//   useEffect(()=>{
//     dispatch(getCountryData(selectedCountry))
//   },[dispatch,selectedCountry])

//   const handleChange = (e)=>{
//     dispatch(selectCountry(e.target.value))
//   }

  return (
    <div className="App">
    
      {/* <select onChange={handleChange} value={selectedCountry} style={{width:"10rem"}}>
        <option>...</option>
        { countries && countries.map((country,index)=>(
          <option key={index} >{country.Country}</option>
        ))}
      </select> */}
     
        <Statistics/>
 
    </div>
  );
}

export default App;
