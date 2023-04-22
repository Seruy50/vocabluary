import {React, useState} from 'react';
import '../styles.css'
import Main from './Training/Main.js';
import MyWords from './myWords';
import StartPage from './StartPage.js';



export default function Training({list, setList}){
    const [wordsList, setWordsList] = useState([]);

    return <div className="training__main">
        <main>
            <StartPage fame={'navigationBar'} add={'button'} training={'button'} vocabluary={'button'} /> 
            <Main wordsList={wordsList} setWordsList={setWordsList} list={list} setList={setList}/>
            <MyWords list={list} setList={setList}/>
        </main>
    </div>
}

