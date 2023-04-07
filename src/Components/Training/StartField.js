import react from 'react'


export default function StartingField({
                                        countOfWords, 
                                        setCountOfWords, 
                                        startPosition,
                                        setStartPosition,
                                        concreteWords,
                                        setConcreteWords,
                                        setStart,
                                        setWordsList,
                                        randomWords
                                    }){
    let quantityOfRandomWords = <div>
            <p className="start__text">Quantity of words:</p>
            <input value={countOfWords} 
                   onChange={(e) => setCountOfWords(e.target.value)} 
                   onFocus={(e) => setCountOfWords('')} />
        </div>

    let concreteWordsForm = <>
        <div>
            <p className="start__text">Start position:</p> <input value={startPosition}
                                          onChange={(e) => setStartPosition(e.target.value)} />
        </div>
        <div>
            <p className="start__text">Quantity of words:</p><input value={countOfWords} 
                onChange={(e) => setCountOfWords(e.target.value)} 
            />
        </div>
    </>

    const startTest = ({}) => {
        setStart('test');
        randomWords(setWordsList, countOfWords, concreteWords, startPosition);
    }
    
    return <div className="training__form start">
            <div className="start__container start__text"><p className="start__text">I want to сhoose concrete words: </p><input className="start__checkBox" type="checkbox" onClick={() => setConcreteWords(!concreteWords)} /></div>
                {concreteWords ? concreteWordsForm : quantityOfRandomWords}
            <div className="start__buttonsForm">
                <button onClick={() => setCountOfWords(20)}>20</button>
                <button onClick={() => setCountOfWords(50)}>50</button>
                <button onClick={() => setCountOfWords(100)}>100</button>
            </div>
            <div className="start__buttonStart">
                <button onClick={startTest}>Press on me to start!</button>
            </div>
        </div>
}