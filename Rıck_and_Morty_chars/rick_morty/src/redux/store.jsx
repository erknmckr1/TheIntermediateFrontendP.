import { configureStore } from "@reduxjs/toolkit";
import rickandmortySlice from "./rickandmortySlice";
import episodesSlice from "./episodesSlice";
export const store = configureStore({
  reducer: {
    characters: rickandmortySlice,
    episodes:episodesSlice
  },
});

