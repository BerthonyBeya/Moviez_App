import { createSlice } from "@reduxjs/toolkit";

const initialState = { movies: "" };

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    value: initialState,
  },
  reducers: {
    addMovies: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
