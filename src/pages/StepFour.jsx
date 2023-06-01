import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { stepContextObj } from "../Context/StepContext"
import StepHeader from "../components/StepHeader"
import BackButton from "../components/BackButton"

import thanksIcon from '../assets/images/icon-thank-you.svg'

export default function StepTwo() {
    const [finished, setFinished] = useState(false)
    const {setStep, billingSelected} = useContext(stepContextObj)
    const [planData] = useState(()=>{return JSON.parse(localStorage.getItem('planData'))})
    const [selectedAddOns] = useState(()=>{return JSON.parse(localStorage.getItem('selectedAddOns')) || []})

    const billingIndicator = billingSelected == 'yearly' ? 'yr' : 'mo'
    const totalMessage = isYearly() ? 'Year' : 'Month'
    const total = 
        selectedAddOns.length > 0 ? planData.price + selectedAddOns.reduce((total, item) => total + item.price , 0) 
                                    : planData.price

    useEffect(()=>{
        setStep(4)
    }, [])

    function isYearly(){
        return billingSelected == 'yearly'
    }

    const selectedAddOnsEl = selectedAddOns.map((addOn, index) => {
        return (
            <div className="selected-addOn" key={index}>
                <p>{addOn.type}</p>
                <p className="price">${addOn.price}/{billingIndicator}</p>
            </div>
        )
    })

    function finishForm() {
        // console.log(JSON.parse(localStorage.getItem('validForm'))); 
        localStorage.clear()
        setFinished(true)
    }
    
    if (finished)
    return (
        <div className="step-page thanks-page">
            <div className="thanks-message">
                <img src={thanksIcon} alt="" />
                <h2>Thank you!</h2>
                <p>
                    Thanks for confirming your subscription! We hope you have fun 
                    using our platform. If you ever need support, please feel free 
                    to email us at support@loremgaming.com.
                </p>
            </div>
           
        </div>
    )

    return (
        <div className="step-page step-four">
            <StepHeader title='Finishing up' description='Double-check everything looks OK before confirming'/>

            <div className="bill-card">
                <div className="bill-card-item selected-plan">
                    <div>
                        <h3>{planData.type} ({billingSelected})</h3>
                        <Link to='/2' className="change-plan-button">change</Link>
                    </div>
                    <p className="price">${planData.price}/{billingIndicator}</p>
                </div>

                <div className="bill-card-item selected-addOns">
                    {selectedAddOnsEl}
                </div>

                <div className="bill-card-item total-card">
                    <p>Total (per {totalMessage})</p>
                    <p className="price">${total}/{billingIndicator}</p>
                </div>
            </div>

            <div className="navigation-buttons">
                <BackButton />
                <button className="confirm-button" onClick={finishForm}>Confirm</button>
            </div>
        </div>
    )
}