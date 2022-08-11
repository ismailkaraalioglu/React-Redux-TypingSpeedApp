import React from "react";
import Word from "./Word";
import { useSelector } from "react-redux";

function TextWords() {
  const words = useSelector((state) => state.words.words);

  return (
    <div className="text-center mt-5 bg-gray-200 md:w-[850px] w-full h-[200px] md:mx-auto flex flex-wrap gap-x-1 gap-y-1 px-5 pt-3 overflow-hidden rounded md:text-xl text-lg">
      {words.map((word) => (
        <Word key={word.id} word={word} id={word.id} />
      ))}
    </div>
  );
}

export default TextWords;
