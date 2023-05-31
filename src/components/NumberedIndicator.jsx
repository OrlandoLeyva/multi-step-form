import { useContext } from "react"
import { stepContextObj } from "../Context/StepContext"

/* eslint-disable react/prop-types */
export default function NumberedIndicator(props) {
    const {step} = useContext(stepContextObj)
    console.log()
    const styles = {
        backgroundColor: 'hsl(206, 94%, 87%)',
        color: 'hsl(213, 96%, 18%)'
    }
    return (
        <div className="numbered-indicator" style={step == props.value ? styles : null}>
            {props.value}
        </div>
    )
}