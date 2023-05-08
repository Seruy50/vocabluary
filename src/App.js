import { React, useState } from "react";
import "@fontsource/aboreto";
import "@fontsource/annie-use-your-telescope";
import "./styles.css";
import AddWords from "./Components/AddWords.js";
import Training from "./Components/Training.js";
import Vocabluary from "./Components/Vocabluary.js";
import StartPage from "./Components/StartPage.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [list, setList] = useState("");
  let fromMain = true;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<StartPage fromMain={fromMain} />}
        />
        <Route path="/new-words" element={<AddWords />} />
        <Route
          path="/training"
          element={<Training list={list} setList={setList} />}
        />
        <Route
          path="/dictionary"
          element={<Vocabluary list={list} setList={setList} />}
        />
      </Routes>
    </Router>
  );
}
