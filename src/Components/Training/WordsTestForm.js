import {React, useState} from 'react'

function Input({wordEng, wordUkr, wrongWords, setWrongWords}){
    const [value, setValue] = useState('');
    const [dis, setDis] = useState(false);
    const [answerCheck, setAnswerCheck] = useState(null);

    let answerArea = <input value={value} 
                            onChange={(e) => setValue(e.target.value)} 
                            onKeyDown={(e) => enter(e)} 
                            disabled={dis} 
                    />; 
    let answerMarker = <span className={answerCheck ? "answerMark rightAnswer" : (answerCheck === false ? "answerMark wrongAnswer" : "answerMark")}></span>;

    const enter = (e) =>{
        wordUkr = wordUkr.split(', ')
        if(e.keyCode === 13){
            console.log(wordUkr)
            if(value === wordUkr[0] || value === wordUkr[1] || value === wordUkr[2]) {
                setAnswerCheck(true);
            } else {
                setAnswerCheck(false);
                setWrongWords([...wrongWords, {eng: wordEng, ukr: wordUkr}])
            }
        setDis(true);
        }
    }

    return <div className="training__question"><p>{wordEng}</p><p>{answerArea}</p><p>{answerMarker}</p></div>
    
}

export default function WordsTestForm({wrongWords, setWrongWords, wordsList, setStart}){
    let answerFields = wordsList.map((item, index) => {
        let word = <Input key={index} 
            wordEng={item.eng} 
            wordUkr={item.ukr} 
            wrongWords={wrongWords} 
            setWrongWords={setWrongWords}/>
        return word;
    });

    return <div>
        {answerFields}
        <button onClick={() => setStart('results')}>Results</button>
    </div>
}