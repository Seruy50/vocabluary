import {React, useState} from 'react'

function Input({wordEng, wordUkr, wrongWords, setWrongWords}){
    const [value, setValue] = useState('');
    const [dis, setDis] = useState(false);
    const [answerCheck, setAnswerCheck] = useState(null);
    
    
    const isBlur = () => {
        wordUkr = wordUkr.split(', ')
            if(value === wordUkr[0] || value === wordUkr[1] || value === wordUkr[2]) {
                setAnswerCheck(true);
            } else {
                setAnswerCheck(false);
                setWrongWords([...wrongWords, {eng: wordEng, ukr: wordUkr}])
            }
        setDis(true);
        }
    
    

    let answerArea = <input value={value} 
                            onChange={(e) => setValue(e.target.value)} 
                            onKeyDown={(e) => enter(e)} 
                            onBlur={isBlur}
                            disabled={dis} 
                    />; 
    let answerMarker = <span className={answerCheck ? "answerMark rightAnswer" : (answerCheck === false ? "answerMark wrongAnswer" : "answerMark")}></span>;
    

   

    const enter = (e) =>{
        wordUkr = wordUkr.split(', ')
        if(e.keyCode === 13){
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

export default function WordsTestForm({ wrongWords, setWrongWords, wordsList, setStart, setWordsList }){
    let answerFields = wordsList.map((item, index) => {
        let word = <Input key={index} 
            wordEng={item.eng.slice(0, 1).toUpperCase() + item.eng.slice(1)} 
            wordUkr={item.ukr} 
            wrongWords={wrongWords} 
            setWrongWords={setWrongWords}/>
        return word;
    });

    return <div className="page">
                 <div className="training__form closeToTop">
                    {answerFields}
                    <div className="start__buttonStart"><button onClick={() => {setStart('results')
                                                                               setWordsList([]) }}
                                                                >Results</button></div>
                </div>
    </div>
}