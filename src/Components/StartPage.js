import { React, useState } from 'react'
import "@fontsource/aboreto"
import {useNavigate} from 'react-router-dom'



export default function StartPage({fame = 'mainButtonsTemplate',
                                  add = 'chooseButtons add',
                                  training = 'chooseButtons training',
                                  vocabluary = 'chooseButtons vocabluary',
                                  fromMain,
                                  setFromMain
}){
    let navigate = useNavigate();
    let addOn = <p>{fromMain ? 'Add words' : 'A'}</p>;
    let train = <p>{fromMain ? 'Training' : 'T'}</p>;
    let voc = <p>{fromMain ? 'Vocabluary' : 'V'}</p>

    return <div className={fame}>
            <button className={add} onClick={() => {
                let pass = 29051993;
                let answer = +prompt('Only for technical use. Enter password:');
                console.log(answer)
                if(answer === pass){
                    navigate("/new-words");
                    if(fromMain) setFromMain(false);
                } else if(answer !== pass && answer !== 0){
                    alert('Я ж сказав, тільки для технічного користування, якого ти тут шукаєш?')
                } 
                }}>{addOn}</button>
            <button className={training} onClick={() => {
                navigate("/training");
                if(fromMain) setFromMain(false);
                }}>{train}</button>
            <button className={vocabluary} onClick={() => {
                navigate("/dictionary");
                if(fromMain) setFromMain(false);
                }}>{voc}</button>
        </div>
}