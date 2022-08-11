import { useRef, useEffect } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";

function Word({ word, id }) {
  const focusWordNumber = useSelector((state) => state.words.focusWordNumber);

  const wordRef = useRef();

  useEffect(() => {
    if (focusWordNumber && wordRef.current) {
      wordRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [focusWordNumber]);

  return (
    <span
      className={classNames({
        "bg-yellow-200 rounded px-1": focusWordNumber === id,
        "text-green-400": word.completed && word.status === "ok",
        "text-red-400": word.completed && word.status === "error",
      })}
      ref={focusWordNumber === id ? wordRef : null}
    >
      {word.text}
    </span>
  );
}

export default Word;
