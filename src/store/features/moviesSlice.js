import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: { upcomingMovies: "" },
  reducers: {
    addMovies: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
