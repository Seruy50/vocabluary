import { React, useState } from "react";
import "../styles.css";
import Main from "./Training/Main.js";
import MyWords from "./myWords";
import StartPage from "./StartPage.js";

export default function Training({ list, setList }) {
  const [wordsList, setWordsList] = useState([]);

  return (
    <div className="training__mainPage">
        <StartPage
          startPageMainBlockClass={"navigation__buttonsform__main__small"}
        />
        <Main
          wordsList={wordsList}
          setWordsList={setWordsList}
          list={list}
          setList={setList}
        />
        <MyWords list={list} setList={setList} />
    </div>
  );
}
