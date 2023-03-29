import {react, useState} from 'react'
import Results from './ResultsForm'

export default function FromEnglishToUkrainian({wrongWords, setStart}){
    const [count, setCount] = useState([0, 0]);
    const [value, setValue] = useState('');
    const [className, setClassName] = useState("training__engToUkr");
    const [mistakes, setMistakes] = useState([0]);

    const changeWord = (e) => {
        if(e.keyCode === 13 && count[1] !== 1){
            setCount([count[0], count[1] = count[1] + 1])
            if(value === wrongWords[count[0]].ukr[0] || 
                value === wrongWords[count[0]].ukr[1] || 
                 value === wrongWords[count[0]].ukr[2]){ 
                    setClassName(className + ' green'); 
                } else { 
                    setClassName(className + ' red');
                    setMistakes([mistakes[0] + 1, ...mistakes.slice(1), wrongWords[count[0]].eng])
        }} else if(e.keyCode === 13 && count[1] === 1){
            setCount([count[0] + 1, 0]);
            setClassName("training__engToUkr");
            setValue('');
        }
    }

    return <div>
        <p>
            {wrongWords.length !== 0 && count[0] !== wrongWords.length ? 
                                            wrongWords[count[0]].eng : 
                                              (count[0] === wrongWords.length ? 'That`s all' : null)} 
        </p>
        <input 
            className={className}
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            onKeyDown={(e)=> changeWord(e)}
            disabled={count[0] === wrongWords.length}
        />
        <br/>
        <button onClick={() => setCount([count[0] + 1, count[1]])} disabled={count[0] === wrongWords.length}>Next</button>
        {count[0] === wrongWords.length ? <Results count={count} mistakes={mistakes} /> : null}
        {count[0] === wrongWords.length ? <button onClick={() => setStart('secondTraining')} >Next</button> : null}
    </div>
}