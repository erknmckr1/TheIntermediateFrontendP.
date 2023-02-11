import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [],
    searchText: "",
    title: "",
    note: "",
    color: "",
  },
  reducers: {
    noteTitle: (state, action) => {
      state.title = action.payload;
    },
    note: (state, action) => {
      state.note = action.payload;
    },
    color: (state, action) => {
      state.color = action.payload;
    },
    findTheNote: (state, action) => {
      state.searchText = action.payload;
    },
    addNote: (state, action) => {
      state.notes.push(action.payload);
      localStorage.setItem("notes",JSON.stringify(state.notes))
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      localStorage.setItem("notes",JSON.stringify(state.notes))

    },
    editNote: (state, action) => {
      const { id, title, note } = action.payload;
      const index = state.notes.findIndex((n) => n.id === id);
      if (index !== -1) {
        state.notes[index].title = title;
        state.notes[index].note = note;
      }
    },
    // modal kısmı 

  },
});

export const { findTheNote, addNote, deleteNote, noteTitle, note, color,editNote } =
  notesSlice.actions;
export default notesSlice.reducer;
