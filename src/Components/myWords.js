import {React, useState} from 'react';


export default function MyWords({list, setList}){
    const [showMyWords, setShowMyWords] = useState('none');
    
    
    return  <div className="temporary">
                    <div className='temporary__buttons__section'>
                        <button className="temporaryButton" onClick={() => {
                            setShowMyWords(showMyWords === 'none' ? 'block' : 'none')
                            wordsFormation(setList, list)
                            }}>My words</button>
                        <button className="temporaryButtonClear" onClick={() => clearMyWords(setList, list)}>Clear</button>
                    </div>
                <div className="temporaryList" style={{display: showMyWords}}>
                    <ol>
                        {list}
                    </ol>
                </div>
            </div>
}

export function wordsFormation(setList, list){
    
    let arrayOfObject = [];
    for(let item in localStorage){
        if(JSON.parse(localStorage.getItem(item))){
            arrayOfObject.push(JSON.parse(localStorage.getItem(item)))
    }}   
    let arrayWithTags = arrayOfObject.map(item => {
            console.log(item)
        return <li key={item.id}><span className="temporary__deleteWord" onClick={() => {
            deleteItemFromArray(item.id, setList, list)}}>{item.eng.slice(0, 1).toUpperCase() + item.eng.slice(1)}</span> - {item.ukr === 'object' ? item.ukr.join(', ') : item.ukr};</li>
    })
    
    console.log(list)
    setList([...arrayWithTags]);
    console.log(list)
}

const clearMyWords = (setList, list) => {
    if(window.confirm('Are you shure?')){
    localStorage.clear();
    wordsFormation(setList, list)
    }
}

const deleteItemFromArray = (item, setList, list) =>{
    localStorage.removeItem(item)
    wordsFormation(setList, list)
}