import {React, useState} from 'react'

let list = [];
export default function MyWords(){
    const [showMyWords, setShowMyWords] = useState('none');
    
    
    return  <div>
                <button className="temporaryButton" onClick={() => {
                    setShowMyWords(showMyWords === 'none' ? 'block' : 'none')
                    wordsFormation()
                    }}>Show my words</button>
                    <button className="temporaryButtonClear" onClick={clearMyWords}>Clear</button>
                <div className="temporaryList" style={{display: showMyWords}}>
                    <ul>
                        {list}
                    </ul>
                </div>
            </div>
}

const wordsFormation = () => {
    let arrayOfObject = [];
    for(let item in localStorage){
        if(JSON.parse(localStorage.getItem(item))){
            arrayOfObject.push(JSON.parse(localStorage.getItem(item)))
    }}   
    let arrayWithTags = arrayOfObject.map(item => {
        return <li key={item.id}>{item.eng} - {item.ukr}</li>
    })
    list.length = 0;
    list.push([...arrayWithTags]);
}

const clearMyWords = () => {
    return localStorage.clear();
}