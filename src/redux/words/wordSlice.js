import { createSlice } from "@reduxjs/toolkit";

export const wordSlice = createSlice({
  name: "words",
  initialState: {
    appLanguage: "",
  },
  reducers: {},
  extraReducers: {},
});

export default wordSlice.reducer;
