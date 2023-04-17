import {react, useState} from 'react';
import Results from './ResultsForm';

let className= "training__fromTo__input";

export default function FromUkrainianToEnglish({wrongWords, setStart, trainStage}){
    const [count, setCount] = useState([0, 0]);
    const [value, setValue] = useState('');
    const [mistakes, setMistakes] = useState([0]);

    return <div className="training__form">
                <p className="training__fromTo__word">
                    {word(wrongWords, count)} 
                </p>
                <input 
                    className={className}
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    onKeyDown={(e)=> changeWord(
                                                    e,
                                                    count,
                                                    setCount,
                                                    wrongWords,
                                                    mistakes,
                                                    setMistakes,
                                                    value,
                                                    setValue
                    )}
                    disabled={count[0] === wrongWords.length}
                />
                {count[0] === wrongWords.length ? <Results 
                                                            count={count} 
                                                            mistakes={mistakes}
                                                            trainStage={trainStage}
                                                /> : null}
                <div className="start__buttonStart">
                    {count[0] === wrongWords.length ? <button onClick={() => setStart('finish')}>Finish</button> : null}
                </div>
               
    </div>
}

const changeWord = (
                    e,
                    count,
                    setCount,
                    wrongWords,
                    mistakes,
                    setMistakes,
                    value,
                    setValue
                    ) => {
    if(e.keyCode === 13 && count[1] !== 1){
        setCount([count[0], count[1] = count[1] + 1])
        if(value === wrongWords[count[0]].eng.slice(0, 1).toLowerCase() + wrongWords[count[0]].eng.slice(1)){ 
                className = className + ' green'; 
            } else { 
                className = className + ' red';
                setMistakes([mistakes[0] + 1, ...mistakes.slice(1), wrongWords[count[0]]])
    }} else if(e.keyCode === 13 && count[1] === 1){
        setCount([count[0] + 1, 0]);
        className = "training__fromTo__input";
        setValue('');
    }
}

const word = (wrongWords, count) => {
    let word;

    if(count[0] === wrongWords.length){
        return 'That`s all';
    } else if(wrongWords.length !== 0 && count[0] !== wrongWords.length && className === "training__fromTo__input red"){
        word  = wrongWords[count[0]].ukr.join(', ');
        return word.slice(0, 1).toUpperCase() + word.slice(1) + ' - ' + wrongWords[count[0]].eng.slice(0, 1).toLowerCase() + wrongWords[count[0]].eng.slice(1) + ';';
    } else if(wrongWords.length !== 0 && count[0] !== wrongWords.length && className !== "training__fromTo__input red"){
        word  = wrongWords[count[0]].ukr.join(', ');
        return word.slice(0, 1).toUpperCase() + word.slice(1);
    } 
}

