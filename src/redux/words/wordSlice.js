import { createSlice } from "@reduxjs/toolkit";

export const wordSlice = createSlice({
  name: "words",
  initialState: {
    words: [],
    input: "",
    focusWordNumber: 0,
    completedWordNumber: 0,
    wrongWordNumber: 0,
    timer: 60,
    isWordGameStart: false,
    isWordGameFinish: false,
  },
  reducers: {
    setWordsData: (state, action) => {
      state.words = action.payload;
    },
    changeInput: (state, action) => {
      state.input = action.payload;
    },
    gameControl: (state, action) => {
      const currentWord = state.words[state.focusWordNumber];
      if (currentWord.text === state.input) {
        currentWord.completed = true;
        currentWord.status = "ok";
        state.completedWordNumber += 1;
        state.focusWordNumber += 1;
        state.input = "";
      } else {
        currentWord.completed = true;
        currentWord.status = "error";
        state.wrongWordNumber += 1;
        state.focusWordNumber += 1;
        state.input = "";
      }
    },
    gameWordStart: (state, action) => {
      state.isWordGameStart = true;
    },
    changeTimer: (state, action) => {
      state.timer -= 1;
    },
    gameWordFinish: (state, action) => {
      state.isWordGameStart = false;
      state.isWordGameFinish = true;
    },
  },
});

export const {
  setWordsData,
  changeInput,
  gameControl,
  changeTimer,
  gameWordStart,
  gameWordFinish,
} = wordSlice.actions;

export default wordSlice.reducer;
