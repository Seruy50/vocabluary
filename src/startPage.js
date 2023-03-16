import {React} from 'react'
import "@fontsource/aboreto"
import  './styles.css'
import {useNavigate} from 'react-router-dom'



export default function StartPage(){
    let navigate = useNavigate();

    return <div className="mainButtonsTemplate">
            <button className="chooseButtons add" onClick={() => navigate("/addWords")}>Add words</button>
            <button className="chooseButtons training" onClick={() => navigate("/training")}>Training</button>
            <button className="chooseButtons vocabluary" onClick={() => navigate("/allWords")}>Vocabluary</button>
        </div>
}