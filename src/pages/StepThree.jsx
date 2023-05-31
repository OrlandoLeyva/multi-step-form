import { useContext, useEffect } from "react"
import { stepContextObj } from "../Context/StepContext"
import StepHeader from "../components/StepHeader"
import BackButton from "../components/BackButton"
import NextButton from "../components/NextButton"
import AddOn from "../components/AddOnCard"

export default function StepTwo() {
    const {setStep} = useContext(stepContextObj)
    useEffect(()=>{
        setStep(3)
    }, [])
    return (
        <div className="step-page">
            <StepHeader title='Pick add-ons' description='Add-ons help enhance your gaming experience'/>

            <div className="addon-cards">
                <AddOn cardData={
                    {type:'Online service', description: 'Access to multiplayer games', yearlyPrice: 10, monthlyPrice: 1}
                }/>
                <AddOn cardData={
                    {type:'Larger storage', description: 'Extra 1TB of cloud save', yearlyPrice: 20, monthlyPrice: 2}
                }/>
                <AddOn cardData={
                    {type:'Customizable profile', description: 'Custom them on your profile', yearlyPrice: 20, monthlyPrice:2}
                }/>
            </div>

            <div className="navigation-buttons">
                <BackButton />
                <NextButton/>
            </div>
        </div>
    )
}