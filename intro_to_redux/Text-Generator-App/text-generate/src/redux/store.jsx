import {configureStore} from '@reduxjs/toolkit'
import { textGenerateSlice } from './TextGenerateSlice/GenerateSlice'

export const store = configureStore({
    reducer:{
        textGenerate:textGenerateSlice.reducer
    }
})