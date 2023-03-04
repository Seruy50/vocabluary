import {React, useState} from 'react'
import styles from './styles.css'

export default function AddWords(){
  const [value, setValue] = useState('');
  const [wordsArray, setWordsArray] = useState([]); 
  const [currentKey, setCurrentKey] = useState([]);

 
  return <div className="main">
    <div className="inputsArea">
      <Input currentKey={currentKey} setCurrentKey={setCurrentKey} value={value} setValue={setValue} wordsArray={wordsArray} setWordsArray={setWordsArray}/>
    </div>
    <div className="words">
      <Words wordsArray={wordsArray}/>
    </div>
  </div>
}

function Input({value, setValue, wordsArray, setWordsArray, currentKey, setCurrentKey}){

  const [spaceStatus, setSpaceStatus] = useState(false);
  const [engWord, setEngWord] = useState(null);
  const [id, setId] = useState('');
  
  const clearText = () => {
    setValue('');
    setEngWord(null);
    setSpaceStatus(false);
  }

  const changeText = (e) => {
    
    const MakeEnglishWord = () => {
      if(!spaceStatus) {setEngWord(e.target.value)};
      setValue(e.target.value);
      setSpaceStatus(true);
    }

    const lineWithWord = () => {
      if(engWord){

        let lettersFromInput = e.target.value.replace(engWord, '').split('');
        
        let ukrLetters = {q:'й', w:'ц', e:'у', r:'к', t:'е', 
        y:'н', u:'г', i:'ш', o:'щ', 
        p:'з', '[':'х', ']':'ї', a:'ф', 
        s:'і', d:'в', f:'а', g:'п', 
        h:'р', j:'о', k:'л', l:'д', ';':'ж', 
        '222':'є', z:'я', x:'ч', c:'с', v:'м', 
        b:'и', n:'т', m:'ь', ',':'б', '.':'ю', '32': ' '};

        lettersFromInput = lettersFromInput.map(item => {
            if(currentKey === 222){
              return ukrLetters['222'];
            }
          return ukrLetters[item] ? ukrLetters[item] : item;
        })

        setValue([engWord + lettersFromInput.join('')]);
      }
    }

    if(currentKey !== 8 && spaceStatus){
      lineWithWord()
      } else if(currentKey !== 8 && currentKey === 32 && !spaceStatus){
         MakeEnglishWord()
        } else if(currentKey !== 8){
          setValue(e.target.value);
          } else if(currentKey === 8){
            setValue(e.target.value.slice(0, e.target.value.length));
          } 
    }

 

  const changeEnter = (e) => {
    setCurrentKey(e.keyCode)
    if(e.keyCode === 13){
      setWordsArray(Object.assign([...wordsArray, id + ' ' + e.target.value]));
      setId(+id + 1)
      setValue("");
      setSpaceStatus(false);
    }
    
  }

  return  <p>
    <input value={value} onBlur={clearText} onChange={(e) => changeText(e)} onKeyDown={(e) => changeEnter(e)}/>
    <button onClick={clearText}>Clear input</button> 
    <input onBlur={(e) => setId(e.target.value)} placeholder="Enter start position"></input>
    </p>
}


function Words({wordsArray}){
  let nes = [...wordsArray];
  let start = '{';
  let end = '}';
  
  nes = nes.map((item, index) => {
    
    return <p key={index}>{start}"id": {item.split(' ')[0]}, "eng": "{item.split(' ')[1]}", "ukr": "{item.split(' ')[2]}{item.split(' ')[3] ? ', ' + item.split(' ')[3] : ''}{item.split(' ')[4] ? ', ' + item.split(' ')[4] : ''}"{end},</p>
  })
  
  return <div>
    {nes}
  </div>
}

