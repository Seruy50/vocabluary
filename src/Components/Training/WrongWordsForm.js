import {React, useState} from 'react'

export default function WrongWordsList({wrongWords, setWrongWords, setStart, setTrainStage}){
    let mistakes = wrongWords.map((item, index) => {
        return <li  className="training__wordsFromList"
                    key={index}>
                        <button className="training__deleteItem"
                                onClick={
                                        () => setWrongWords(
                                                            wrongWords.filter(elem => item !== elem)
                                                            )
                                        }><span /><span /></button>{item.eng}{' - '}{item.ukr.join(', ')}
        </li>
    })

    const handleClick = (status) =>{
        setStart(status);
        if(status === 'firstTraining'){
            let words = [...wrongWords, ...wrongWords, ...wrongWords, ...wrongWords, ...wrongWords];
            words.sort(() => Math.random() - 0.5)
            setWrongWords([...words])
        }
        setTrainStage('english')
    } 
    console.log(mistakes.length)
    let list = (mistakes.length > 0 ? <><ul>{mistakes}</ul>
                                        <div className="start__buttonStart">
                                            <button onClick={() => handleClick('firstTraining')}>Next</button>
                                        </div>
                                      </> 
                                    : 
                                      <><p>You know all the words from the list! Great! <br /> Or, maybe, you clicked on 'Results' button, 
                                            without doing anything on previous page. In this case, you're asshole!</p>
                                        <div className="start__buttonStart">
                                            <button onClick={() => handleClick('begining')}>Back</button>
                                        </div>
                                      </>)
    console.log(list)

    
    return <div className="training__form wrongWords">
                {list}
    </div>
    



}