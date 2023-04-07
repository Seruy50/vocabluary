import React from 'react'
import "@fontsource/aboreto"
import "@fontsource/annie-use-your-telescope"
import  './styles.css'
import AddWords from './Components/AddWords.js'
import Training from './Components/Training.js'
import Vocabluary from './Components/Vocabluary.js'
import StartPage from './Components/StartPage.js'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'



export default function App(){

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="/new-words" element={<AddWords />}/>
        <Route path="/training" element={<Training />}/>
        <Route path="/dictionary" element={<Vocabluary />}/>
      </Routes>
    </Router>
  )
}



