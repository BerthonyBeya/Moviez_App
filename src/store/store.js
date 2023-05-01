// This is the store
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../store/features/moviesSlice";
import showsReducer from "../store/features/showsSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    shows: showsReducer,
  },
});
