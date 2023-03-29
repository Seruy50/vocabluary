import {React, useState} from 'react';
import words from '../Words';
import StartingField from './StartField';
import WordsTestForm from './WordsTestForm';
import WrongWordsList from './WrongWordsForm';
import FromUkrainianToEnglish from './FromUkrToEngForm';
import FromEnglishToUkrainian from './FromEngToUkrForm';

export default function Main(){
                        const [wordsList, setWordsList] = useState()
                        const [wrongWords, setWrongWords] = useState([])
                        const [start, setStart] = useState('begining')
                        const [countOfWords, setCountOfWords] = useState(0)
                        const [concreteWords, setConcreteWords] = useState(false)
                        const [startPosition, setStartPosition] = useState('')
if(start === 'test'){
return <WordsTestForm
       wordsList={wordsList}
       wrongWords={wrongWords} 
       setWrongWords={setWrongWords}
       setStart={setStart}
/>
} else if(start === 'results') {
return <WrongWordsList 
     wrongWords={wrongWords} 
     setWrongWords={setWrongWords}
     setStart={setStart}
     
/>
} else if(start === 'firstTraining') {
return <FromEnglishToUkrainian wrongWords={wrongWords} 
                setStart={setStart}/>
} else if(start === 'secondTraining') {
return <FromUkrainianToEnglish wrongWords={wrongWords} 
                   setStart={setStart}/>
} else if(start === 'begining'){
return <StartingField countOfWords={countOfWords}
       setCountOfWords={setCountOfWords}
       startPosition={startPosition}
       setStartPosition={setStartPosition}
       concreteWords={concreteWords}
       setConcreteWords={setConcreteWords}
       setWordsList={setWordsList} 
       setStart={setStart}
       randomWords={randomWords}
/>
} 
}

function randomWords(setWordsList, countOfWords, concreteWords, startPosition) {
    let numbers = []; 

    if(!concreteWords){ 
        for(let i = 0; i < (+countOfWords === 0 ? 5 : countOfWords) ; ){
            let random = Math.floor(Math.random() * (words.length - 1 + 1) + 1);
            if(numbers.includes(random)){
                continue
            } else {
                numbers.push(random);
                i++;
            }
        }
    } else {
        for(let i = startPosition, k = 0; k < countOfWords; k++ ){
            numbers.push(+i);
            i = +i + 1;
        }
    }

    let obj = [];

    for(let i = 0; i < numbers.length; i++){  
        let one = words.filter(item => item.id === numbers[i])[0];
        obj.push(one);
        }
    setWordsList([...obj])
}