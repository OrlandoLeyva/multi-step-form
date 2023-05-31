import { useContext, useEffect, useState } from "react"
import { stepContextObj } from "../Context/StepContext"

/* eslint-disable react/prop-types */
export default function AddOn(props){
    const {cardData} = props
    const [isChecked, setIsChecked] = useState(()=>{
        const selectedAddOns = JSON.parse(localStorage.getItem('selectedAddOns')) || []
        return selectedAddOns.some(addOn => addOn.type == cardData.type)
    })

    const {billingSelected} = useContext(stepContextObj)
    const price = billingSelected == 'yearly' ? cardData.yearlyPrice : cardData.monthlyPrice

    function toggleCheck(){
        const selectedAddOns = JSON.parse(localStorage.getItem('selectedAddOns')) || []
        if (isChecked) {
            const newSelectedOns = selectedAddOns.filter(addOn => addOn.type !== cardData.type)
            localStorage.setItem('selectedAddOns', JSON.stringify(newSelectedOns))
        } else {
            selectedAddOns.push({type: cardData.type, price: price})
            localStorage.setItem('selectedAddOns', JSON.stringify(selectedAddOns))
        }

        setIsChecked(prevValue => {
            return !prevValue
        })
    }

    useEffect(()=>{
        if (isChecked) {
            console.log('is ck');
            const selectedAddOns = JSON.parse(localStorage.getItem('selectedAddOns')) || []
            const newSelectedOns = selectedAddOns.filter(addOn => addOn.type !== cardData.type)
            localStorage.setItem('selectedAddOns', JSON.stringify([...newSelectedOns, {type: cardData.type, price: price}]))
        } 
    }, [price])

    return (
        <div className={`add-on-card ${isChecked ? 'checked': ''}`} onClick={toggleCheck}>
            <div className="input-holder">
                <input 
                    onChange={()=>{}}
                    checked={isChecked}
                    type="checkbox" style={{background: 'red'}} />
                </div>
            <div className="add-on-card-info">
                <h3>{cardData.type}</h3>
                <p className="add-on-card-description">{cardData.description}</p>
            </div>
            <p className="add-on-card-price">{`+${price}/${billingSelected == 'yearly' ? 'yr' : 'mo'}`}</p>
        </div>
    )
}