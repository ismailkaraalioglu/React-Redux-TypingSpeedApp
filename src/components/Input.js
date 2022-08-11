import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeInput,
  gameControl,
  changeTimer,
  gameWordStart,
  gameWordFinish,
} from "../redux/words/wordSlice";
import TimeRestart from "./TimeRestart";

let interval;

function Input() {
  const inputText = useSelector((state) => state.words.input);
  const isWordGameStart = useSelector((state) => state.words.isWordGameStart);
  const timer = useSelector((state) => state.words.timer);
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    dispatch(changeInput(e.target.value.trim()));
    if (!isWordGameStart) {
      dispatch(gameWordStart());
      time();
    }
  };

  const time = () => {
    interval = setInterval(() => {
      dispatch(changeTimer());
    }, 100);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 32) {
      dispatch(gameControl());
    }
  };

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(interval);
      dispatch(gameWordFinish());
    }
  }, [timer, dispatch]);

  return (
    <div className="mx-auto mt-8 w-[500px] flex gap-x-3">
      <input
        className="bg-gray-200 pl-3 py-2 w-full flex-1 rounded focus:outline-none"
        value={inputText}
        onChange={handleChangeInput}
        autoFocus
        onKeyUp={handleKeyUp}
      />
      <TimeRestart />
    </div>
  );
}

export default Input;
