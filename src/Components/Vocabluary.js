import {React, useState} from 'react'
import {Translation} from './Dictionary/translation.js'
import Vocab from './Dictionary/vocabluary.js'
import MyWords from '../Components/myWords.js'
import StartPage from './StartPage.js';



export default function Vocabluary({list, setList}){
  const [choosenLetter, setChoosenLetter] = useState('');
  const [wordsCount, setWordsCount] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);


  let statuses = {
                    normal :{
                                mainForm: 'dictionary__mainForm__alphabetAndVocab',
                                alphabet: 'dictionary__alphabet',
                                vocabluary: 'dictionary__vocabluary__listHolder'
                            },
                    active :{
                                mainForm: 'dictionary__mainForm__alphabetAndVocab alphabetAndVocab__active',
                                alphabet: 'dictionary__alphabet alphabet__active',
                                vocabluary: 'dictionary__vocabluary__listHolder listHolder__active'
                            }
                   
                }

  const [alphabetPosition, setAlphabetPosition] = useState({...statuses.normal});
  

  let alphabet = <table className={alphabetPosition.alphabet} >
            <tbody onClick={(e) => {
                    setAlphabetPosition({...statuses.active})
                    setChoosenLetter(e.target.innerText.toLowerCase());
                    setWordsCount(25);
                    setCurrentPage(1);
  }}>
                <tr>
                    <td>A</td>
                    <td>B</td>
                    <td>C</td>
                    <td>D</td>
                    <td>E</td>
                    <td>F</td>
                    <td>G</td>
                </tr>
                <tr>
                    <td>H</td>
                    <td>I</td>
                    <td>J</td>
                    <td>K</td>
                    <td>L</td>
                    <td>M</td>
                    <td>N</td>
                </tr>
                <tr>
                    <td>O</td>
                    <td>P</td>
                    <td>Q</td>
                    <td>R</td>
                    <td>S</td>
                    <td>T</td>
                    <td>U</td>
                </tr>
                <tr>
                    <td>V</td>
                    <td>W</td>
                    <td>X</td>
                    <td>Y</td>
                    <td>Z</td>
                    <td colSpan="2">All</td>
                </tr>
                <tr>
                    <td colSpan="7" onClick={(e) => {
                        setAlphabetPosition({...statuses.normal})
                        e.stopPropagation()}}>Close</td>
                </tr>
            </tbody>
        </table>

        console.log('main')


  return <div className="dictionary__mainPage">
            <StartPage fame={'navigationBar'} add={'button'} training={'button'} vocabluary={'button'}/> 
            <div className="dictionary__mainForm">
                <Translation />
                <div className={alphabetPosition.mainForm}>
                    {alphabet }
                    <Vocab choosenLetter={choosenLetter} 
                           setChoosenLetter={setChoosenLetter} 
                           wordsCount={wordsCount}
                           setWordsCount={setWordsCount}
                           currentPage={currentPage}
                           setCurrentPage={setCurrentPage}
                           alphabetPosition={alphabetPosition}
                           list={list}
                           setList={setList}/>
                </div>
                <MyWords list={list}
                         setList={setList}
                         />
            </div>
              
             
    </div>
}