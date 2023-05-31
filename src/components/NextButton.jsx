import { useContext } from "react"
import { Link } from "react-router-dom"
import { stepContextObj } from "../Context/StepContext"

export default function NextButton(){
    const {step} = useContext(stepContextObj)
    function saveData(){

    }

    return (
        <Link to={`/${step + 1}`} className="next-button" onClick={saveData}>Next Step</Link>
    )
}