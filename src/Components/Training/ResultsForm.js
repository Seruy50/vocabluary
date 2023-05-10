import React from "react";

export default function Results({ mistakes, wrongWordsLength }) {
  let message;
  let wordsWithMistakes = randerWordsWithMistakes(mistakes);
  let resultInPercents = ((wrongWordsLength / 5 - wordsWithMistakes.length) / (wrongWordsLength / 5)) * 100;
  console.log(resultInPercents)
  

  if (resultInPercents >= 90) {
    message = "Great, go on, ultimate result!";
  } else if (resultInPercents >= 50 && resultInPercents < 90) {
    message = "Nice one, but you need to repeat next words: ";
  } else {
    message = "Not the best result, really. Please, pay special attention to the next words: ";
  }

  return (
    <div className="training__results">
      <p>{wrongWordsLength / 5 - wordsWithMistakes.length + "/" + wrongWordsLength / 5}</p>
      <p>
        {message}
        <i>
          <b>{message[0] !== "G" ? wordsWithMistakes.join(', ') + ";" : null}</b>
        </i>
      </p>
    </div>
  );
}

function randerWordsWithMistakes(words) {
  let final = [];

  words = words.slice(1);
  
  let uniqueWords = new Set();
  words.map(item => uniqueWords.add(item.eng));

  for(let elem of uniqueWords.keys()){
    elem = elem.slice(0, 1).toLowerCase() + elem.slice(1);
    final.push(elem);
  }

  return final;
}
