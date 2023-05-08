import React from "react";
import { addToLocalStorage } from "../Dictionary/vocabluary.js";
import { wordsFormation } from "../myWords.js";

export default function WrongWordsList({
  wrongWords,
  setWrongWords,
  setStart,
  setTrainStage,
  list,
  setList,
}) {
  let mistakes = wrongWords.map((item, index) => {
    return (
      <li className="training__wordsFromList" key={index}>
        <button
          className="training__deleteItem"
          onClick={() =>
            setWrongWords(wrongWords.filter((elem) => item !== elem))
          }
        >
          <span />
          <span />
        </button>
        <button
          onClick={() => {
            addToLocalStorage(item.id, item.eng, item.ukr);
            wordsFormation(setList, list);
          }}
          className="dictionary__vocabluary__list__button list__button__training"
        >
          <span></span>
          <span></span>
        </button>
        {item.eng}
        {" - "}
        {item.ukr.join(", ")}
      </li>
    );
  });

  const handleClick = (status) => {
    setStart(status);
    if (status === "firstTraining") {
      let words = [
        ...wrongWords,
        ...wrongWords,
        ...wrongWords,
        ...wrongWords,
        ...wrongWords,
      ];
      words.sort(() => Math.random() - 0.5);
      setWrongWords([...words]);
    }
    setTrainStage("english");
  };

  let listA =
    mistakes.length > 0 ? (
      <>
        <ul>{mistakes}</ul>
        <div className="start__buttonStart toBottom">
          <button onClick={() => handleClick("firstTraining")}>Next</button>
        </div>
      </>
    ) : (
      <>
        <p className="training__knowAll">
          You know all the words from the list! Great!
        </p>
        <p className="training__cheater">
          But, if you clicked on 'Results' button, without doing anything on
          previous page - you're asshole!
        </p>
        <div className="start__buttonStart">
          <button onClick={() => handleClick("begining")}>Back</button>
        </div>
      </>
    );

  return <div className="training__form wrongWords">{listA}</div>;
}
