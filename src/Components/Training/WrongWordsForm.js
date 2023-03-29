import {React, useState} from 'react'

export default function WrongWordsList({wrongWords, setWrongWords, setStart}){
    let mistakes = wrongWords.map((item, index) => {
        return <li key={index}>{item.eng}{' - '}{item.ukr.join(', ')}<button onClick={
            () => setWrongWords(
                wrongWords.filter(elem => item !== elem)
            )
        }>Delete this</button></li>
    })

    const handleClick = () =>{
        setStart('firstTraining');
        let words = [...wrongWords, ...wrongWords, ...wrongWords, ...wrongWords, ...wrongWords];
        words.sort(() => Math.random() - 0.5)
        setWrongWords([...words])
    } 

    if(wrongWords.length > 0){
        return <div>
                <ul>{mistakes}</ul>
                <button onClick={() => handleClick()}>Next</button>
        </div>
    }



}