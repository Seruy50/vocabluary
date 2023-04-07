import {React, useState} from 'react';
import '../styles.css'
import Main from './Training/Main.js';

export default function Training(){
    const [wordsList, setWordsList] = useState([]);

    return <div className="training__main" style={{height: wordsList.length > 0 ? 250 + wordsList.length * 69 + 'px' : 100 + 'vh'}}>
        <header className="header">
    
        </header>
        <main>
            <Main wordsList={wordsList} setWordsList={setWordsList}/>
        </main>
    </div>
}

