import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./words/wordSlice";

export const store = configureStore({
  reducer: {
    words: wordSlice,
  },
});
