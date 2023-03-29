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
            <p>Quantity of words</p>
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
            <p>Quantity of words:</p> <input value={countOfWords} 
                onChange={(e) => setCountOfWords(e.target.value)} 
                placeholder="Enter quantity" />
        </div>
    </>

    const startTest = ({}) => {
        setStart('test');
        randomWords(setWordsList, countOfWords, concreteWords, startPosition);
    }

    return <div className="training__start__form">
            <div><p>I want to сhoose concrete words: </p><input type="checkbox" onClick={() => setConcreteWords(!concreteWords)} /></div>
                {concreteWords ? concreteWordsForm : quantityOfRandomWords}
            <button onClick={startTest}>Натисни на мене, щооб почати</button>
        </div>
}