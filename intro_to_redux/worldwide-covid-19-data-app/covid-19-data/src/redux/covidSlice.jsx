 import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
 import axios from 'axios'

export const getCountries = createAsyncThunk(
    'covidInfo/getCountries',async()=>{
       try{
        const res = await axios('https://api.covid19api.com/countries')
        return res.data
       }catch(error){
        return console.log(error)
       }
    }
)
export const getCountryData = createAsyncThunk(
    'covidInfo/getCountryData',async(selectedCountry)=>{
     const res =  await axios.get(`https://api.covid19api.com/total/dayone/country/${selectedCountry}`)
      return res.data[res.data.length -1]
        
        // .catch(error => console.log(error))
    }
)
 
    const covidSlice = createSlice({
     name:"covidSlice",
     initialState:{
        countries:[],
        selectedCountry:'...',
        countryData:null,
        status:'idle',
     },
     reducers:{
        selectCountry:(state,action)=>{
            state.selectedCountry = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getCountries.fulfilled,(state,action)=>{
            state.countries = action.payload;
            state.status = 'succeeded'
        })
        .addCase(getCountries.pending,(state)=>{
            state.status='loading'
        })
        
        .addCase(getCountryData.fulfilled,(state,action)=>{
            state.countryData = action.payload;
            state.status = 'succeeded';
        })
        .addCase(getCountryData.pending,(state,action)=>{
            state.status = 'loading'
        })
    }
    
 })

 export const {selectCountry} = covidSlice.actions

 export default covidSlice.reducer
 