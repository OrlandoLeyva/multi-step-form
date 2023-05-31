import { useEffect, useRef } from "react"

/* eslint-disable react/prop-types */
export default function PlanCard(props){
    const {planData, select, billingSelected} = props
    const selectedPlan = JSON.parse(localStorage.getItem('planData'))
    const planCardRef = useRef()

    const price = billingSelected == 'yearly' ? planData.YearlyPrice : planData.monthlyPrice

    function selectPlan(){
        localStorage.setItem('planData', JSON.stringify({type: planData.type, price: price}))
        select(planCardRef)
    }

    function haveBeenPreviouslySelected(){
        if (selectedPlan) {
            return selectedPlan.type == planData.type
        }

        return false
    }

    useEffect(()=>{
        if (haveBeenPreviouslySelected()) {
            console.log('running');
            localStorage.setItem('planData', JSON.stringify({type: planData.type, price: price}))
            select(planCardRef)
        }
        else if (props.default && !selectedPlan) {
            localStorage.setItem('planData', JSON.stringify({type: planData.type, price: price}))
            select(planCardRef)
        }
    }, [price])

    console.log(planData.icon);

    return (
        <div className="plan-card" onClick={selectPlan} ref={planCardRef}>
            <img src={`${planData.icon.image}`} className="plan-icon"/>
            <div className="plan-details">
                <h2 className="plan-type">{planData.type}</h2>
                {billingSelected == 'yearly' ? (
                    <p className="plan-billing">${planData.YearlyPrice}/yr</p> 
                ) : (
                    <p className="plan-billing">${planData.monthlyPrice}/mo</p> 
                )}
                {billingSelected == 'yearly' ? <p className="plan-offer">{planData.offer}</p> : ''}
            </div>
        </div>
    )
}

