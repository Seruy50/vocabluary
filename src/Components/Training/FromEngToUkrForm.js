import { React, useState } from "react";
import Results from "./ResultsForm";

let className = "training__fromTo__input";

export default function FromEnglishToUkrainian({
  originalWrongWords,
  setStart,
  trainStage,
  setTrainStage,
}) {
  const [count, setCount] = useState([0, 0]);
  const [value, setValue] = useState("");
  const [mistakes, setMistakes] = useState([0]);

  let wrongWords = JSON.parse(JSON.stringify(originalWrongWords));

  return (
    <div className=" training__form">
      <p className="training__fromTo__word">{word(wrongWords, count)}</p>
      <input
        className={className}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) =>
          changeWord(
            e,
            value,
            setValue,
            wrongWords,
            count,
            setCount,
            mistakes,
            setMistakes
          )
        }
        disabled={count[0] === wrongWords.length}
      />
      {count[0] === wrongWords.length ? (
        <Results  mistakes={mistakes} wrongWordsLength={wrongWords.length}/>
      ) : null}
      <p className="training__wordsCounter" style={{display: count[0] + 1 > wrongWords.length ? 'none' : 'block'}}>{count[0] + 1 + '/' + wrongWords.length}</p>
      <div className="start__buttonStart">
        {count[0] === wrongWords.length ? (
          <button
            onClick={() => {
              setStart("secondTraining");
              setTrainStage("ukrainian");
            }}
          >
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
}

const changeWord = (
  e,
  value,
  setValue,
  wrongWords,
  count,
  setCount,
  mistakes,
  setMistakes
) => {
  if (e.keyCode === 13 && count[1] !== 1) {
    
    if (
      value === wrongWords[count[0]].ukr[0] ||
      value === wrongWords[count[0]].ukr[1] ||
      value === wrongWords[count[0]].ukr[2]
    ) {
      className = className + " green";
      setCount([count[0], (count[1] = count[1] + 1)]);
    } else if (className !== "training__fromTo__input red"){
      className = className + " red";
      setMistakes([
        mistakes[0] + 1,
        ...mistakes.slice(1),
        wrongWords[count[0]],
      ]);
    } else {
      setCount([count[0], 0]);
      className = "training__fromTo__input";
      setValue("");
    } 
  } else if (e.keyCode === 13 && count[1] === 1) {
    setCount([count[0] + 1, 0]);
    className = "training__fromTo__input";
    setValue("");
  }
};

const word = (wrongWords, count) => {
  if (
    wrongWords.length !== 0 &&
    count[0] !== wrongWords.length &&
    className === "training__fromTo__input red"
  ) {
    return (
      wrongWords[count[0]].eng +
      " - " +
      wrongWords[count[0]].ukr.join(", ") +
      ";"
    );
  } else if (
    wrongWords.length !== 0 &&
    count[0] !== wrongWords.length &&
    className !== "training__fromTo__input red"
  ) {
    return wrongWords[count[0]].eng;
  } else if (count[0] === wrongWords.length) {
    return "That`s all";
  }
};
