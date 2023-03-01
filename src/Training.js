import {React, useState} from 'react';
import words from './Words'

export default function Training(){
    const [wordsList, setWordsList] = useState()
    const [wrongWords, setWrongWords] = useState([])
    const [start, setStart] = useState(false)
    
    const startTest = () => {
        setStart(true);
        randomWords(wordsList, setWordsList);
        console.log(wordsList)
    }

    return <div>
        <button onClick={startTest}>Натисни на мене, щооб почати</button>
        {start ? <TestInputsFields wordsList={wordsList} wrongWords={wrongWords} setWrongWords={setWrongWords}/> : <></>}
        {wrongWords.length !== 0 ? 'Слова, що варто повторити/вивчити: ' + {wrongWords} : ''}
    </div>
}

function randomWords(wordsList, setWordsList) {

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
    console.log(obj)
    setWordsList([...obj])
    console.log(wordsList)
    console.log()
}

function TestInputsFields({wrongWords, setWrongWords, wordsList}){
    let wordsToTest = wordsList;
    console.log(wordsToTest)
    
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
        if(e.keyCode === 13){
            if(value === wordUkr) {
                setAnswerCheck(true);
            } else {
                setAnswerCheck(false);
                setWrongWords([...wrongWords, wordEng + ', '])
            }
        setDis(true);
        }
    }
    console.log(wrongWords)


    return <p> {wordEng}<input value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => enter(e)} disabled={dis}></input> 
                        <span className={answerCheck ? "answerMark rightAnswer" : (answerCheck === false ? "answerMark wrongAnswer" : "answerMark")}></span>
                        <span>{answerCheck === false ? 'Правильний переклад -  ' + wordUkr + ';': ''}</span>
         </p>
    
}