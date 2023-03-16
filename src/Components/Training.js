import {React, useState} from 'react';
import words from './Words';
import {v4 as uuidv4} from 'uuid';


function randomWords(setWordsList, countOfWords, concreteWords, startPosition, quantityOfWords) {
    let numbers = []; 

    if(!concreteWords){ 
        for(let i = 0; i < (+countOfWords === 0 ? 25 : countOfWords) ; ){
            let random = Math.floor(Math.random() * (words.length - 1 + 1) + 1);
            if(numbers.includes(random)){
                continue
            } else {
                numbers.push(random);
                i++;
            }
        }
    } else {
        for(let i = startPosition, k = 0; k < quantityOfWords; k++ ){
            numbers.push(+i);
            i = +i + 1;
        }
    }
    console.log(numbers)

    let obj = [];

    for(let i = 0; i < numbers.length; i++){  
        let one = words.filter(item => item.id === numbers[i])[0];
        obj.push(one);
        }
    setWordsList([...obj])
}

function TestInputsFields({wrongWords, setWrongWords, wordsList}){
    console.log(wordsList)
    let answerFields = wordsList.map(item => {
        let word = <Input wordEng={item.eng} wordUkr={item.ukr} wrongWords={wrongWords} setWrongWords={setWrongWords}/>
        return word;
    });

    return <div>
        {answerFields}
    </div>
}

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
    let rightAnswers = <span>{answerCheck === false ? 'Правильний переклад -  ' + wordUkr + ';': ''}</span>;

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

    return <p>{wordEng}{answerArea}{answerMarker}{rightAnswers}</p>
    
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
    const [countOfWords, setCountOfWords] = useState(0)
    const [concreteWords, setConcreteWords] = useState(false)
    const [startPosition, setStartPosition] = useState('');
    const [quantityOfWords, setQuantityOfWords] = useState('');

    let quantityOfRandomWords = <div>
                                    <p>Enter quantity of words</p>
                                    <input value={countOfWords} 
                                           onChange={(e) => setCountOfWords(e.target.value)} 
                                           placeholder="Enter quantity" />
                                </div>
                     
    let concreteWordsForm = <>
            <div>
                <p>Start position:</p> <input value={startPosition}
                        onChange={(e) => setStartPosition(e.target.value)} />
            </div>
            <div>
                <p>Quantity of words:</p> <input value={quantityOfWords} 
                        onChange={(e) => setQuantityOfWords(e.target.value)} />
            </div>
    </>

    const startTest = () => {
        setStart(true);
        randomWords(setWordsList, countOfWords, concreteWords, startPosition, quantityOfWords);
    }

    return <div>
        <div className={start ? "training__start__form stopDisplay" : "training__start__form"}>
            <div><p>I want to shoose concrete words: </p><input type="checkbox" onClick={() => setConcreteWords(!concreteWords)} /></div>
                {concreteWords ? concreteWordsForm : quantityOfRandomWords}
            <button onClick={startTest}>Натисни на мене, щооб почати</button>
        </div>
        <div className="training__test__form">   
            {start ? <TestInputsFields wordsList={wordsList} wrongWords={wrongWords} setWrongWords={setWrongWords}/> : null}
        </div>
        <div className="training__worngWords__form">
            {wrongWords.length !== 0 ? 'Слова, що варто повторити/вивчити: ' : ''}
            <WrongWordsList wrongWords={wrongWords}/>
        </div>
    </div>
}

