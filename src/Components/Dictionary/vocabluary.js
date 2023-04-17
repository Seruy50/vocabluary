import React from 'react';
import words from '../../Components/Words.js'




export default function Vocab({ choosenLetter, wordsCount, setWordsCount, setShow, currentPage, setCurrentPage, alphabetPosition }){
        let wordsList = [];
        let elem;
        let wordsForElem;
        let buttonsChangePage = [];
        let numberOfButtons;
        let startPosition = 25;
        
        
       

        
        if(choosenLetter !== 'all'){
            wordsForElem = words.filter(item => item.eng.startsWith(choosenLetter));
            wordsForElem.sort((a, b) => a.eng > b.eng ? 1 : -1) 
            for(let i = wordsCount - 25; i < (wordsForElem.length - 1 > wordsCount ? wordsCount :
                    wordsForElem.length - 1); i++){
                        elem = <li key={+wordsForElem[i].id}>{wordsForElem[i].eng.slice(0, 1).toUpperCase() + 
                            wordsForElem[i].eng.slice(1)} - {wordsForElem[i].ukr}<button onClick={() => 
                                addToLocalStorage(wordsForElem[i].id, wordsForElem[i].eng, wordsForElem[i].ukr)}
                                    className="dictionary__vocabluary__list__button">
                                    <span></span><span></span></button></li>
                        wordsList.push(elem)
            } 
            numberOfButtons = Math.ceil(wordsForElem.length / 25);
            
        } else if(choosenLetter === 'all'){
            
            for(let i = wordsCount - 25; i < wordsCount; i++){
                elem = <li key={words[i].id}>{words[i].id}. {words[i].eng.slice(0, 1).toUpperCase() + 
                    words[i].eng.slice(1)} - {words[i].ukr}<button onClick={() => 
                        addToLocalStorage(words[i].id, words[i].eng, words[i].ukr)}
                         className="dictionary__vocabluary__list__button">
                            <span></span><span></span></button></li>
                wordsList.push(elem)
            }
            numberOfButtons = Math.floor(words.length / 25);
        } else if (choosenLetter === 'close'){
            setShow('none')
        }
        
        for(let i = 1; i <= numberOfButtons; i++){
            buttonsChangePage.push(<button className="dictionary__vocabluary__buttonCurrentPage" key={i} onClick={() => {setWordsCount(startPosition * i)
                                                                                                                 setCurrentPage(i)
                                                                                                                }}>{i}</button>)
        }

        const buttonsRow = () => {

            switch(numberOfButtons){
                case 1:
                    break;
                case 2:
                    return  <div className="dictionary__vocabluary__buttonSection">
                                <div className="dictionary__vocabluary__buttons">
                                    {buttonsChangePage[0]}{buttonsChangePage[1]}
                                </div> 
                            </div>
                default:
                    return <div className="dictionary__vocabluary__buttonSection">
                                <div className="dictionary__vocabluary__buttons">
                                    {buttonsChangePage[0]}
                                        {buttonsChangePage[currentPage - 2] !== buttonsChangePage[0] ? 
                                                buttonsChangePage[currentPage - 2] : ''}
                                                    {buttonsChangePage[currentPage] !== buttonsChangePage[buttonsChangePage.length - 1] ? 
                                                        buttonsChangePage[currentPage] : ''}{buttonsChangePage[buttonsChangePage.length - 1]} 
                                </div>
                                <div className="dictionary__vocabluary__buttonSection__choosePage">
                                    <input className="dictionary__vocabluary__buttonSection__currentPage"
                                            value={currentPage}
                                            onChange={(e) => {setCurrentPage(e.target.value)
                                            setWordsCount(25 * e.target.value < words.length && 
                                                25 * e.target.value !== 0 ? 
                                                    25 * e.target.value : (25 * e.target.value > words.length ?
                                                            words.length - 25 : 25))
                                    }}></input> / <span className="dictionary__vocabluary__buttonSection__countOfPages">{numberOfButtons}</span>
                                </div>
                            </div>
                }
        }
        
       
    return (
        <div>
            <div className={alphabetPosition.vocabluary}>
                <ul className="dictionary__vocabluary__list" >{wordsList.length > 0 ? 
                    wordsList : 'Sorry, right now there is no words, that starts on ' + 
                        choosenLetter.toUpperCase() + ' in dictionary'}</ul>
                {buttonsRow()}
            </div>
        </div> 
    )
}

const addToLocalStorage = (id, eng, ukr) => {
    let some = JSON.stringify({'id': id, 'eng': eng, 'ukr': ukr});
    localStorage.setItem(id, some);
}

