import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import StepHeader from "../components/StepHeader"
// import NextButton from "../components/NextButton"
import { stepContextObj } from "../Context/StepContext"


export default function StepOne(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '' 
    })
    const [showErrorMessage, setShowErrorMessage] = useState(false)

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

    const navigate = useNavigate()

    function validateForm(){

        for (const value of Object.values(formData)){
            console.log(typeof value);
            if (value.trim() == '') { 
                setShowErrorMessage(true)
                return false;
            }
        }
        localStorage.setItem('validForm', JSON.stringify(true))
        navigate('/2')
    }

    return (
        <div className="step-page step-one">
            <StepHeader title='Personal info' description='Please provide your name, email, address and phone number'/>
            {/* FORM */}
            <form className="step-one-form">
                {showErrorMessage && <p className="form-error-message">Please, fill out all the inputs</p>}
                <label htmlFor="name">
                    <span className="block">Name</span>
                    <input 
                        onChange={handleChange}
                        id="name"
                        name="name"
                        value={formData.name}
                        type="text" />
                </label>
                

                <label htmlFor="email">
                    <span className="block">Email address</span>
                    <input 
                        onChange={handleChange}
                        id="email"
                        name="email"
                        value={formData.email}
                        type="email" />
                </label>
                

                <label htmlFor="phone">
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
                <button className="next-button" onClick={validateForm}>Next step</button>
                {/* <NextButton/> */}
            </div>
        </div>
    )
}

// BillingSwitcher