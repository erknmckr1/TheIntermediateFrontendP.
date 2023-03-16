 import {configureStore} from '@reduxjs/toolkit'
import covidSlice from './covidSlice'
 export const store = configureStore({
     reducer:{
        covidInfo :covidSlice
      }
 })