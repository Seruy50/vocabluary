import React from 'react'

export default function Results ({count, mistakes}){

    let resultInPercents = (count[0] - mistakes[0]) / count[0] * 100;
    let message;
    
    if(resultInPercents >= 90){
        message = 'Nice, go on, ultimate result!'
    } else if(resultInPercents >= 80 && resultInPercents < 90 ){
        message = 'Nice one, but you need to repeat next words: ' + mistakes.slice(1).join(', ');
    } else {
        message = 'You are awesome. Very stupid, but awesome.'
    }

    return <div>
        <p>{count[0] - mistakes[0] + '/' + count[0]}</p>
        <p>{message}</p>
    </div>
}