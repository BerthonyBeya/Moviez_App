import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: { search: [] },
  reducers: {
    addSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addSearch } = searchSlice.actions;

export default searchSlice.reducer;
