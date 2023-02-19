import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getEpisodes = createAsyncThunk(
  "Episodes/getEpisodes",
  async () => {
    const res = await axios("https://rickandmortyapi.com/api/episode");
    return res.data;
  }
);

export const episodesSlice = createSlice({
  name: "episodes",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEpisodes.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(getEpisodes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getEpisodes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const episodeSelector = (state) => state.episodes.items;
export const statusSelector = (state) => state.episodes.status;
export const errorSelector = (state) => state.episodes.error;
export default episodesSlice.reducer;
