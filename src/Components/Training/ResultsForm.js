import {React, useState} from 'react'

export default function Results ({ 
                                   count, 
                                   mistakes,
                                   trainStage,
                                }){

    let resultInPercents = (count[0] - mistakes[0]) / count[0] * 100;
    let message;
    let wordsWithMistakes = randerWordsWithMistakes(mistakes, trainStage);
    
    
    if(resultInPercents >= 80){
        message = 'Nice, go on, ultimate result!';
    } else if(resultInPercents >= 60 && resultInPercents < 90 ){
        message = 'Nice one, but you need to repeat next words: ';
    } else {
        message = 'You are awesome. Very stupid, but awesome. Repeat, please, next words: '
    }
    
    
    console.log(wordsWithMistakes)

    return <div className="training__results">
        <p>{count[0] - mistakes[0] + '/' + count[0]}</p>
        <p>{message}<i><b>{wordsWithMistakes};</b></i></p>
    </div>
}

function randerWordsWithMistakes( words, trainStage ){
    let final = [];

    words = words.slice(1);
    
    words.map(item => {
        if(trainStage === 'english'){
            if(!(final.includes(item.eng))){
                return final.push(item.eng);
            }
        } else {
            console.log(item.ukr)
            item.ukr.map(item => {
                if(!final.includes(item)){
                    return final.push(item);
                }
            })
        }
    })

    final = final.join(', ')

    return final;
}