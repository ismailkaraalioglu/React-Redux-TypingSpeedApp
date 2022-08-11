import React from "react";
import { AiOutlineReload } from "react-icons/ai";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

function TimeRestart() {
  const timer = useSelector((state) => state.words.timer);
  const isWordGameFinish = useSelector((state) => state.words.isWordGameFinish);
  const wrongWordNumber = useSelector((state) => state.words.wrongWordNumber);
  const completedWordNumber = useSelector(
    (state) => state.words.completedWordNumber
  );

  if (isWordGameFinish) {
    Swal.fire({
      title: "You are score",
      html: `Completed Word: ${completedWordNumber} <br /> <br /> Wrong Word: ${wrongWordNumber}`,
      icon: "success",
      confirmButtonText: "Replay",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Loading!", "", "success");
        window.location.reload();
      }
    });
  }

  return (
    <>
      <button className="p-3 bg-gray-200 rounded cursor-default">
        {timer}
      </button>
      <button
        className="p-3 bg-gray-200 rounded"
        onClick={() => window.location.reload()}
      >
        <AiOutlineReload />
      </button>
    </>
  );
}

export default TimeRestart;
