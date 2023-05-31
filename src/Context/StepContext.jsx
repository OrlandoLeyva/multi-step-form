/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const stepContextObj = createContext()

function StepContext(props) {
    // SAVE THE STATE IN LOCAL STORAGE FOR THE USER NOT TO LOSE THE CURRENT PAGE IF THE PAGE WAS REFRESHED
    const [step, setStep] = useState(1)
    const [billingSelected, setBillingSelected] = useState(()=>localStorage.getItem('selectedBilling') || 'yearly')
    const [planData, setPlanData] = useState(null)
    // function changeStep(newStep){
    //     setStep(newStep)
    // }
    return (
        <stepContextObj.Provider value={{
            step, 
            setStep, 
            billingSelected, 
            setBillingSelected,
            planData,
            setPlanData
        }}>
            {props.children}
        </stepContextObj.Provider>
    )
}

export {StepContext, stepContextObj}
