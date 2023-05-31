import { useContext } from "react"
import { stepContextObj } from "../Context/StepContext"
import { Link } from "react-router-dom"

export default function BackButton(){
    const {step} = useContext(stepContextObj)
    const stepToGo = step == 2 ? '' : step - 1
    return (
        <Link to={`/${stepToGo}`} className="back-button" >go back</Link>
    )
}