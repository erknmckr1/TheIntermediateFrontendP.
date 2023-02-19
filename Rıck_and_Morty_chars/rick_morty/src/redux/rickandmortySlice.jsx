import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
    loading: false,
    page: 1,
  },
  reducers: {
    incPage: (state) => {
      state.page += 1;
      
    },
    decPage: (state) => {
      state.page -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state, action) => {
        state.loading = true; // loading özelliği güncellenir
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.chars =action.payload ;
        state.loading = false; // loading özelliği güncellenir
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.loading = false; // loading özelliği güncellenir
        state.error = action.error.message;
      });
  },
});
export const {incPage,decPage} = rickandmortySlice.actions
export default rickandmortySlice.reducer;
