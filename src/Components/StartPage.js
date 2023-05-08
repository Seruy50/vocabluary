import React from "react";
import "@fontsource/aboreto";
import { useNavigate } from "react-router-dom";

export default function StartPage({
  startPageMainBlockClass = "navigation__buttonsform__main",
  addButtonClass = "navigation__buttonsform__buttons addColor",
  trainingButtonClass = "navigation__buttonsform__buttons trainingColor",
  vocabluaryButtonClass = "navigation__buttonsform__buttons vocabluaryColor",
  fromMain,
}) {
  let navigate = useNavigate();

  return (
    <div className={startPageMainBlockClass}>
      <button
        className={addButtonClass}
        onClick={() => login(navigate, fromMain)}
      >
        <p>{fromMain ? "Add words" : "A"}</p>
      </button>
      <button
        className={trainingButtonClass}
        onClick={() => navigationSetings(navigate, fromMain, "/training")}
      >
        <p>{fromMain ? "Training" : "T"}</p>
      </button>
      <button
        className={vocabluaryButtonClass}
        onClick={() => navigationSetings(navigate, fromMain, "/dictionary")}
      >
        <p>{fromMain ? "Vocabluary" : "V"}</p>
      </button>
    </div>
  );
}

function navigationSetings(navigate, fromMain, path) {
  navigate(path);
  if (fromMain) fromMain = false;
}

function login(navigate, fromMain) {
  let pass = 29051993;
  let answer = +prompt("Only for technical use. Enter password:");

  if (answer === pass) {
    navigationSetings(navigate, fromMain, "/new-words");
  } else if (answer !== pass && answer !== 0) {
    alert(
      "Я ж сказав, тільки для технічного користування, якого ти тут шукаєш?"
    );
  }
}
