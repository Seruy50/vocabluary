import {React} from 'react'
import "@fontsource/aboreto"
import {useNavigate} from 'react-router-dom'



export default function StartPage(){
    let navigate = useNavigate();

    return <div className="mainButtonsTemplate">
            <button className="chooseButtons add" onClick={() => navigate("/new-words")}>Add words</button>
            <button className="chooseButtons training" onClick={() => navigate("/training")}>Training</button>
            <button className="chooseButtons vocabluary" onClick={() => navigate("/dictionary")}>Vocabluary</button>
        </div>
}