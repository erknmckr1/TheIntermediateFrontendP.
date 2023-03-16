import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { selectCountry } from '../redux/covidSlice';
import InfoCard from '../components/ınfoCard';
import { getCountries,getCountryData } from '../redux/covidSlice';
import Navbar from '../components/Navbar';
import BarChart from '../components/Chart';
import './statistic.css'



function Statistics() {
  const dispatch = useDispatch()
  const {countryData,selectedCountry,countries,status} = useSelector((state)=>state.covidInfo)
  const [data,setData] = useState();
  console.log(data)
  console.log(countryData)
  console.log(countries)
  console.log(selectedCountry)
  console.log(status)

  useEffect(()=>{
    dispatch(getCountries())
  },[dispatch])
  useEffect(()=>{
    dispatch(getCountryData(selectedCountry))
  },[dispatch,selectedCountry])
  const handleChangeCountry = (e) =>{
    dispatch(selectCountry(e.target.value))
  }
  useEffect(()=>{
   countryData ? setData([
      {name:'Infected',value:countryData.Confirmed,date:countryData.Date,country:countryData.Country,bg:"#EAF2F8"},
      {name:'Recovered', value:countryData.Recovered,date:countryData.Date,country:countryData.Country,bg:"#E9F7EF"},
      {name:'Active', value:countryData.Active,date:countryData.Date,country:countryData.Country,bg:"#FEF5E7"},
      {name:'Death', value:countryData.Deaths,date:countryData.Date,country:countryData.Country,bg:"#F9EBEA"},

    ]) : setData([])
  },[selectedCountry,countryData ])
  
  return (
    <div>
    <Navbar/>
    <h1 className='mt-5 title'>Covid-19 Statistics By Country</h1>
    {/* select area */}
    <div className='mt-5'>
      <select style={{width:"15rem", height:"2rem"}} onChange={handleChangeCountry}>
        <option value={selectedCountry}></option>
        {countries.map((country,index) =>(
          <option  key={index}>{country.Country}</option>
        ))}
      </select>
    </div>
    {/* card */}
    <div className='row mt-5 cardArea'>
      <div className='col-auto' style={{width:'1200px'}}>
        {status === 'loading' ? "Loading" : data && 
        <div className=' cardDiv'>
        {data.map((data,index)=>(
          <InfoCard key={index} data={data}/>
        ))}
        </div>
        }
      </div>
    </div>
    {/* chart start */}
        <BarChart data={data}/>
    </div>
  )
}

export default Statistics