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
        message = 'Great, go on, ultimate result!';
    } else if(resultInPercents >= 60 && resultInPercents < 90 ){
        message = 'Nice one, but you need to repeat next words: ';
    } else {
        message = 'Not the best result, really. Please, carefully next words: '
    }

    return <div className="training__results">
        <p>{count[0] - mistakes[0] + '/' + count[0]}</p>
        <p>{message}<i><b>{message[0] !== 'G' ? wordsWithMistakes + ';' : null}</b></i></p>
    </div>
}

function randerWordsWithMistakes( words, trainStage ){
    let final = [];

    words = words.slice(1);
    
    words.map(item => {
        if(trainStage === 'english'){
            if(!(final.includes(item.eng.slice(0, 1).toLowerCase() + item.eng.slice(1)))){
                return final.push(item.eng.slice(0, 1).toLowerCase() + item.eng.slice(1));
            }
        } else {
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