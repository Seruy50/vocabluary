import React from "react";
import { wordsFromMyList } from "./Main";
import allWords from "../Words.js";

export default function StartingField({
  countOfWords,
  setCountOfWords,
  startPosition,
  setStartPosition,
  concreteWords,
  setConcreteWords,
  setStart,
  setWordsList,
  randomWords,
}) {
  let quantityOfRandomWords = (
    <div>
      <p className="start__text">Quantity of words:</p>
      <input
        value={countOfWords}
        onChange={(e) => setCountOfWords(e.target.value)}
        onFocus={(e) => setCountOfWords("")}
      />
    </div>
  );

  let concreteWordsForm = (
    <>
      <div>
        <p className="start__text">Start position:</p>{" "}
        <input
          value={startPosition}
          onChange={(e) => setStartPosition(e.target.value)}
        />
      </div>
      <div>
        <p className="start__text">Quantity of words:</p>
        <input
          value={countOfWords}
          onChange={(e) => setCountOfWords(e.target.value)}
        />
      </div>
    </>
  );

  const startTest = (func, num) => {
    let words = num === 1 ? allWords : wordsFromMyList();
    let count =
      !isNaN(countOfWords) && countOfWords > 0 && countOfWords <= words.length;
    let start =
      !isNaN(startPosition) &&
      startPosition > 0 &&
      startPosition <= words.length &&
      +(startPosition - 1) + +countOfWords <= words.length;

    switch (concreteWords) {
      case false:
        if (count) {
          setStart("test");
          func(setWordsList, countOfWords, startPosition, num);
        } else if (isNaN(countOfWords)) {
          alert("You should enter number, not letter(s)");
        } else if (countOfWords <= 0) {
          alert("Please, enter number, bigger than 0");
        } else if (countOfWords > words.length) {
          alert(
            `Current quantity of words in choosen vocabluary - ${words.length}.`
          );
        }
        break;
      case true:
        if (start) {
          setStart("test");
          func(setWordsList, countOfWords, startPosition, num);
        } else if (isNaN(startPosition)) {
          alert("You should enter number, not letter(s)");
        } else if (startPosition <= 0) {
          alert("Please, enter number, bigger than 0");
        } else if (startPosition > words.length) {
          alert(
            `There's no ${startPosition} word in vocabluary, current quantity of words in choosen vocabluary - ${words.length}.`
          );
        } else if (+(startPosition - 1) + +countOfWords > words.length) {
          alert(`Current quantity of words in vocabluary - ${words.length}.`);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="training__form start">
      <div className="start__container start__text">
        <p className="start__text">I want to сhoose concrete words: </p>
        <input
          className="start__checkBox"
          type="checkbox"
          onClick={() => setConcreteWords(!concreteWords)}
        />
      </div>
      {concreteWords ? concreteWordsForm : quantityOfRandomWords}
      <div className="start__buttonsForm">
        <button onClick={() => setCountOfWords(20)}>20</button>
        <button onClick={() => setCountOfWords(50)}>50</button>
        <button onClick={() => setCountOfWords(100)}>100</button>
      </div>
      <div className="start__buttonStart">
        <button onClick={() => startTest(randomWords, 1)}>
          Press on me to start!
        </button>
      </div>
      <div className="start__buttonStart">
        <button onClick={() => startTest(randomWords, 2)}>
          Training with my words
        </button>
      </div>
    </div>
  );
}

