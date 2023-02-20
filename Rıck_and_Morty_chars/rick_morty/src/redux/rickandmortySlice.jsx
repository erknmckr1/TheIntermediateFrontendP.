import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCharacters = createAsyncThunk("characters/getAllCharacters",async()=>{
  let allCharacters = [];
  let page = 1 ;
  let res = await axios( `https://rickandmortyapi.com/api/character/?page=${page}`);
  
  while(res.data.info.next !== null){
    allCharacters = allCharacters.concat(res.data.results); // direkt karakterın bılgılerının oldugu results kısmını aldık. 
    page++;
    res = await axios(`https://rickandmortyapi.com/api/character/?page=${page}`);
  }
  allCharacters = allCharacters.concat(res.data.results);
  return allCharacters;
})

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (page) => {
    const res = await axios(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    return res.data;
  }
);

export const rickandmortySlice = createSlice({
  name: "characters",
  initialState: {
    chars: [],
    allChars:[],
    loading: false,
    page: 1,
    searchValue:""
  },
  reducers: {
    incPage: (state) => {
      state.page += 1;
      
    },
    decPage: (state) => {
      state.page -= 1;
    },
    searchChange:(state,action)=>{
      state.searchValue = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state, action) => {
        state.loading = true; // loading özelliği güncellenir
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.chars =action.payload;
        state.loading = false; 
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllCharacters.fulfilled, (state,action)=>{
        state.allChars = action.payload;
        state.loading = false;
      })
      
  },
});
export const {incPage,decPage,searchChange} = rickandmortySlice.actions
export default rickandmortySlice.reducer;
