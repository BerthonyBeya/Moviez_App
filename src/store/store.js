// This is the store
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../store/features/moviesSlice";
import showsReducer from "../store/features/showsSlice";
import searchSlice from "./features/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    movies: moviesReducer,
    shows: showsReducer,
  },
});
