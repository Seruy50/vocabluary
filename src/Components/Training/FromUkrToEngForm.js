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
                    onChange={(e) => setValue(e.target.value.slice(0, 1).toUpperCase() + e.target.value.slice(1))} 
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
                <br/>
                <div className="start__buttonStart">
                    <button 
                            className="training__fromTo__button"
                            onClick={() => setCount([count[0] + 1, count[1]])} 
                            disabled={count[0] === wrongWords.length}
                    >Next</button>
                </div>
                {count[0] === wrongWords.length ? <Results 
                                                            count={count} 
                                                            mistakes={mistakes}
                                                            trainStage={trainStage}
                                                /> : null}
                {count[0] === wrongWords.length ? <button onClick={() => setStart('finish')} >Next</button> : null}
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
        if(value === wrongWords[count[0]].eng){ 
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
    console.log(count[0] === wrongWords.length - 1, count[0], wrongWords.length - 1)
    console.log(wrongWords.length !== 0 && count[0] !== wrongWords.length && className === "training__fromTo__input red")
    console.log(wrongWords.length !== 0 && count[0] !== wrongWords.length && className !== "training__fromTo__input red")

    if(count[0] === wrongWords.length){
        return 'That`s all';
    } else if(wrongWords.length !== 0 && count[0] !== wrongWords.length && className === "training__fromTo__input red"){
        word  = wrongWords[count[0]].ukr.join(', ');
        return word.slice(0, 1).toUpperCase() + word.slice(1) + ' - ' + wrongWords[count[0]].eng + ';';
    } else if(wrongWords.length !== 0 && count[0] !== wrongWords.length && className !== "training__fromTo__input red"){
        word  = wrongWords[count[0]].ukr.join(', ');
        return word.slice(0, 1).toUpperCase() + word.slice(1);
    } 
}

