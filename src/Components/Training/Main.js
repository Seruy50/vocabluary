import {React, useState} from 'react';
import allWords from '../Words';
import StartingField from './StartField';
import WordsTestForm from './WordsTestForm';
import WrongWordsList from './WrongWordsForm';
import FromUkrainianToEnglish from './FromUkrToEngForm';
import FromEnglishToUkrainian from './FromEngToUkrForm';


export default function Main({ wordsList, setWordsList, list, setList}){
const [wrongWords, setWrongWords] = useState([]);
const [start, setStart] = useState('begining');
const [countOfWords, setCountOfWords] = useState('');
const [concreteWords, setConcreteWords] = useState(false);
const [startPosition, setStartPosition] = useState('');
const [trainStage, setTrainStage] = useState('');
const [whatWords, setWhatWords] = useState('All');


if(start === 'test'){
return <WordsTestForm
                wordsList={wordsList}
                wrongWords={wrongWords} 
                setWrongWords={setWrongWords}
                setStart={setStart}
                setWordsList={setWordsList}
/>
} else if(start === 'results') {
return <WrongWordsList 
                wrongWords={wrongWords} 
                setWrongWords={setWrongWords}
                setStart={setStart}
                setTrainStage={setTrainStage}
                list={list}
                setList={setList}
     
/>
} else if(start === 'firstTraining') {
return <FromEnglishToUkrainian 
                originalWrongWords={wrongWords} 
                setWrongWords={setWrongWords}
                setStart={setStart}
                wordsList={wordsList}
                start={start}
                trainStage={trainStage}
                setTrainStage={setTrainStage}
                />
} else if(start === 'secondTraining') {
return <FromUkrainianToEnglish 
                wrongWords={wrongWords} 
                setWrongWords={setWrongWords}       
                setStart={setStart}
                wordsList={wordsList}
                trainStage={trainStage}
                />
} else if(start === 'begining'){
return <StartingField 
                countOfWords={countOfWords}
                setCountOfWords={setCountOfWords}
                startPosition={startPosition}
                setStartPosition={setStartPosition}
                concreteWords={concreteWords}
                setConcreteWords={setConcreteWords}
                setWordsList={setWordsList} 
                setStart={setStart}
                randomWords={randomWords}
                whatWords={whatWords}
                setWhatWords={setWhatWords}
/>
} else if(start === 'finish'){
    return <div className="training__form">
        <p className="training__end">
            Great, that's all!
        </p>
        <div className="start__buttonStart">
            <button onClick={() => {
                setStart('begining');
                setWrongWords([]);

                }}>Back to the start</button>
        </div>
    </div>
}
}

export function wordsFromMyList(){
    let words = [];

    for(let item in localStorage){
        if(JSON.parse(localStorage.getItem(item))){
            words.push(JSON.parse(localStorage.getItem(item)))
    }}   
    
    words.map(item => {
        if(typeof item.ukr === 'object'){
            item.ukr = item.ukr[0];
        } 
    });

    return words;
}

function randomWords(setWordsList, countOfWords, startPosition, num){
    let words = +num === 1 ? allWords : wordsFromMyList();
    console.log(words)
    let obj = [];
    let numbers = [];
    let start; 
    let count = countOfWords;

    switch(!!startPosition){
        case false:
            if(+count === +words.length){
                words.map(item => obj.push(item));
            } else if(count && count < words.length){
                   while(numbers.length < count){
                        let random = 0 + Math.random() * ((words.length - 2) + 1 - 0);
                        random = Math.floor(random);
                        if(!numbers.includes(random)){
                            numbers.push(random);
                        }
                    }
                numbers.sort((a, b) => a > b ? 1 : -1)
                for(let number of numbers){
                    obj.push(words[number])
                }
            } 
            break;
        case true: 
        console.log(startPosition - 1)
            start = startPosition;
            for(let i = start; i < +start + +countOfWords; i++){
                obj.push(words[i - 1])
            }

            console.log(start)
            
            console.log('yes')
            break;
        default :
            console.log('nothing');
    }

   
    
    setWordsList([...obj])
}


