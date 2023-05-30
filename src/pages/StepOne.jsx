import { useState } from "react"
import StepHeader from "../components/StepHeader"

export default function StepOne(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: 0 
    })
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
            <form>
                <label htmlFor="name">Name</label>
                <input 
                    onChange={handleChange}
                    id="name"
                    name="name"
                    value={formData.name}
                    type="text" />

                <label htmlFor="name">Email address</label>
                <input 
                    onChange={handleChange}
                    id="email"
                    name="email"
                    value={formData.email}
                    type="email" />

                <label htmlFor="name">Phone Number</label>
                <input 
                    onChange={handleChange}
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    type="text" />
            </form>
        </div>
    )
}