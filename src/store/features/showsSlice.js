import { createSlice } from "@reduxjs/toolkit";

export const showsSlice = createSlice({
  name: "shows",
  initialState: { showsOnAir: [], popularTvShows: [] },
  reducers: {
    addShows: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addShows } = showsSlice.actions;

export default showsSlice.reducer;