import { configureStore } from "@reduxjs/toolkit";
import { WordsSlice } from "./WordsSlice/WordsSlice";
export const store = configureStore({
    reducer:{
        wordSlice:WordsSlice.reducer,
    }
})