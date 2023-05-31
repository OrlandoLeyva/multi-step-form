import { useState, useContext, useEffect } from "react"
import StepHeader from "../components/StepHeader"
import NextButton from "../components/NextButton"
import { stepContextObj } from "../Context/StepContext"


export default function StepOne(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: 0 
    })

    const {setStep} = useContext(stepContextObj)
    useEffect(()=>{
        setStep(1)
    }, [])

    function handleChange(e) {
        const {value, name} = e.target

        setFormData(prevValue => {
            return {
                ...prevValue,
                [name]: value,
            }
        })
    }

    return (
        <div className="step-page step-one">
            <StepHeader title='Personal info' description='Please provide your name, email, address and phone number'/>
            {/* FORM */}
            <form className="step-one-form">
                <label htmlFor="name">
                    <span className="block">Name</span>
                    <input 
                        onChange={handleChange}
                        id="name"
                        name="name"
                        value={formData.name}
                        type="text" />
                </label>
                

                <label htmlFor="name">
                    <span className="block">Email address</span>
                    <input 
                        onChange={handleChange}
                        id="email"
                        name="email"
                        value={formData.email}
                        type="email" />
                </label>
                

                <label htmlFor="name">
                    <span className="block">Phone Number</span>
                    <input 
                        onChange={handleChange}
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        type="text" />
                </label>
                
            </form>

            <div className="navigation-buttons">
                <NextButton/>
            </div>
        </div>
    )
}

// BillingSwitcher