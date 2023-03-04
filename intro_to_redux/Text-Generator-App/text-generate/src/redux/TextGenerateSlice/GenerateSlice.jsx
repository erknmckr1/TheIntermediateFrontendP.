import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// verileri cekmek ıcın tetıkle. 
export const getText = createAsyncThunk(
  "getText/text",
  async (paramater) => {
    const res = await axios(`https://baconipsum.com/api/?type=all-meat&paras=${paramater.paras}&format=${paramater.format}`)
   
    return res.data;
  }
);

export const textGenerateSlice = createSlice({
  name: "textGenerate",
  initialState: {
    paragraphs: [],
    paras :1,
    format:"text"
  },
  reducers: {
    addParas:(state,action)=>{
        state.paras = action.payload
    },
    changeFormat:(state,action)=>{
      state.format = action.payload
    }
      
    
  },
  extraReducers: (builder) => {
    builder
    .addCase(getText.fulfilled, (state, action) => {
      state.paragraphs = [action.payload];
    });
  },
});

export const {addParas,changeFormat} = textGenerateSlice.actions
export default textGenerateSlice.reducer
