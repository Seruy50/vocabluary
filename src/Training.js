import {React, useState} from 'react';
import words from './Words';
import {v4 as uuidv4} from 'uuid'

function randomWords(setWordsList) {
    let randomNumbers = []; 

    for(let i = 0; i < 10;){
        let random = Math.floor(Math.random() * (words.length - 1 + 1) + 1);
        if(randomNumbers.includes(random)){
            continue
        } else {
            randomNumbers.push(random);
            i++;
        }
    }

    let obj = [];

    for(let i = 0; i < randomNumbers.length; i++){  
        let one = words.filter(item => item.id === randomNumbers[i])
        obj.push(one);
        }
    setWordsList([...obj])
}

function TestInputsFields({wrongWords, setWrongWords, wordsList}){
    let wordsToTest = wordsList;
    
    return <div>
        <Input wordEng={wordsToTest[0][0].eng} wordUkr={wordsToTest[0][0].ukr} wrongWords={wrongWords} setWrongWords={setWrongWords}/>
        <Input wordEng={wordsToTest[1][0].eng} wordUkr={wordsToTest[1][0].ukr} wrongWords={wrongWords} setWrongWords={setWrongWords}/>
        <Input wordEng={wordsToTest[2][0].eng} wordUkr={wordsToTest[2][0].ukr} wrongWords={wrongWords} setWrongWords={setWrongWords}/>
        <Input wordEng={wordsToTest[3][0].eng} wordUkr={wordsToTest[3][0].ukr} wrongWords={wrongWords} setWrongWords={setWrongWords}/>
        <Input wordEng={wordsToTest[4][0].eng} wordUkr={wordsToTest[4][0].ukr} wrongWords={wrongWords} setWrongWords={setWrongWords}/>
        <Input wordEng={wordsToTest[5][0].eng} wordUkr={wordsToTest[5][0].ukr} wrongWords={wrongWords} setWrongWords={setWrongWords}/>
        <Input wordEng={wordsToTest[6][0].eng} wordUkr={wordsToTest[6][0].ukr} wrongWords={wrongWords} setWrongWords={setWrongWords}/>
        <Input wordEng={wordsToTest[7][0].eng} wordUkr={wordsToTest[7][0].ukr} wrongWords={wrongWords} setWrongWords={setWrongWords}/>
        <Input wordEng={wordsToTest[8][0].eng} wordUkr={wordsToTest[8][0].ukr} wrongWords={wrongWords} setWrongWords={setWrongWords}/>
        <Input wordEng={wordsToTest[9][0].eng} wordUkr={wordsToTest[9][0].ukr} wrongWords={wrongWords} setWrongWords={setWrongWords}/>
    </div>
}

function Input({wordEng, wordUkr, wrongWords, setWrongWords}){
    const [value, setValue] = useState('');
    const [dis, setDis] = useState(false);
    const [answerCheck, setAnswerCheck] = useState(null);
   
    const enter = (e) =>{
        wordUkr = wordUkr.split(', ')
        if(e.keyCode === 13){
            console.log(wordUkr)
            if(value === wordUkr[0] || value === wordUkr[1] || value === wordUkr[2]) {
                setAnswerCheck(true);
            } else {
                setAnswerCheck(false);
                setWrongWords([...wrongWords, wordEng])
            }
        setDis(true);
        }
    }

    return <p> {wordEng}<input value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => enter(e)} disabled={dis} /> 
                        <span className={answerCheck ? "answerMark rightAnswer" : (answerCheck === false ? "answerMark wrongAnswer" : "answerMark")}></span>
                        <span>{answerCheck === false ? 'Правильний переклад -  ' + wordUkr + ';': ''}</span>
         </p>
    
}

function WrongWordsList({wrongWords}){
    let mistakes = wrongWords.map(item => {
        return <li key={uuidv4()}>{item}</li>
    })

    if(wrongWords.length > 0){
        return <ul>{mistakes}</ul>
    }

}

export default function Training(){
    const [wordsList, setWordsList] = useState()
    const [wrongWords, setWrongWords] = useState([])
    const [start, setStart] = useState(false)
    
    const startTest = () => {
        setStart(true);
        randomWords(setWordsList);
    }

    return <div>
        <button onClick={startTest}>Натисни на мене, щооб почати</button>
        {start ? <TestInputsFields wordsList={wordsList} wrongWords={wrongWords} setWrongWords={setWrongWords}/> : <></>}
        {wrongWords.length !== 0 ? 'Слова, що варто повторити/вивчити: ' : ''}
        <WrongWordsList wrongWords={wrongWords}/>
    </div>
}

