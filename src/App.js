import React from 'react'
import "@fontsource/aboreto"
import  './styles.css'
import AddWords from './Components/AddWords.js'
import Training from './Components/Training.js'
import Vocabluary from './Components/Vocabluary.js'
import StartPage from './Components/StartPage.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



export default function App(){

  return (
    <Router>
      <Routes>
        <Route path="/vocabluary" element={<StartPage/>}/>
        <Route path="/vocabluary/new-words" element={<AddWords />}/>
        <Route path="/vocabluary/training" element={<Training />}/>
        <Route path="/vocabluary/dictionary" element={<Vocabluary />}/>
      </Routes>
    </Router>
  )
}



