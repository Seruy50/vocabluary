import {React, useState} from 'react'
import "@fontsource/aboreto"
import styles from './styles.css'
import AddWords from './AddWords.js'
import Training from './Training.js'
import Vocabluary from './Vocabluary.js'

export default function App(){
  const [currentChoise, setCurrentChoise] = useState(null);

  return <div>
           <div className={!currentChoise ? "mainButtonsTemplate" : "hideElement"}>
            <button className={!currentChoise ? "chooseButtons add" : "hideElement"} onClick={() => setCurrentChoise('Add')}>Add words</button>
            <button className={!currentChoise ? "chooseButtons training" : "hideElement"} onClick={() => setCurrentChoise('Training')}>Training</button>
            <button className={!currentChoise ? "chooseButtons vocabluary" : "hideElement"} onClick={() => setCurrentChoise('Vocabluary')}>Vocabluary</button>
           </div>
           <div>
            {currentChoise === "Add" ? <AddWords /> : (currentChoise === "Training" ? <Training /> : (currentChoise === "Vocabluary" ? <Vocabluary /> : <></>))}
           </div>
        </div>
}