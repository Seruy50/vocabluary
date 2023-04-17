import {react, useState} from 'react';
import words from '../../Components/Words.js'


let hintsForWords;

export function Translation(){
    const [value, setValue] = useState('');
    const [toShow, setToShow] = useState('none')
    const [translationOfWord, setTranslationOfWord] = useState('');

    return  <div className="dictionary__translationBar">
                <div className="dictionary__wordsForTranslation__eng">
                    <div className="dictionary__wordsForTranslation__english">
                        <input className="dictionary__wordsForTranslation__englishInput"
                                                value={value}
                                                onChange={(e) => {
                                                    setValue(e.target.value);
                                                    translationFromEnglish(e, setTranslationOfWord);
                                                    hintsForWordsPanel(e, setValue, setToShow, setTranslationOfWord);
                                                }}
                        ></input>
                        <div className="dictionary__wordsForTranslation__hints" style={{display: toShow}}>
                            <ul>
                                {hintsForWords}
                            </ul>
                        </div>                  
                    </div>
                </div>
                <div className="dictionary__wordsForTranslation__ukr">
                    <div className="dictionary__wordsForTranslation__ukrainian">
                        {translationOfWord.length > 0 ? translationOfWord[0].ukr : translationOfWord}
                    </div>
                </div>
  </div>
}

const translationFromEnglish = (e, setTranslationOfWord) => {
    let word = e.target.value;
   
    if(e.target.value.length >= 2){
        setTranslationOfWord(words.filter(item => {
            if(item.eng.startsWith(word) && item.eng.endsWith(word)){
                return item.ukr;
            } 
        }))
    } 
}

const hintsForWordsPanel = (e, setValue, setToShow, setTranslationOfWord) => {
    let word = e.target.value;

    if(e.target.value.length >= 3){
        hintsForWords = words.filter(item => {
            if(item.eng.startsWith(word)){  
                return item.eng;
            } 
        })
        console.log(hintsForWords.length)
        if(hintsForWords.length !== 0){
            setToShow('block');
            hintsForWords = hintsForWords.map(item => {
                return <li key={item.id} onClick={() => {
                                setValue(item.eng);
                                console.log(item)
                                setTranslationOfWord([{ukr: item.ukr}])
                                setToShow('none');
                            }}>{item.eng}</li>
            })
        } else if(hintsForWords.length === 0){
            setToShow('none');
        }
    } else if(e.target.value.length < 3){
        setToShow('none');
    }

   

    console.log(hintsForWords)
}