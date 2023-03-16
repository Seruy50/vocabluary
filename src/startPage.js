import {React} from 'react'
import "@fontsource/aboreto"
import  './styles.css'
import {useNavigate} from 'react-router-dom'



export default function StartPage(){
    let navigate = useNavigate();

    return <div className="mainButtonsTemplate">
            <button className="chooseButtons add" onClick={() => navigate("/vocabluary/new-words")}>Add words</button>
            <button className="chooseButtons training" onClick={() => navigate("/vocabluary/training")}>Training</button>
            <button className="chooseButtons vocabluary" onClick={() => navigate("/vocabluary/dictionary")}>Vocabluary</button>
        </div>
}