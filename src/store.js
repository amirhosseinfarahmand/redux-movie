import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./components/OurRedux";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
