import { useEffect, useRef } from "react"

/* eslint-disable react/prop-types */
export default function PlanCard(props){
    const {planData, select, billingSelected} = props
    const selectedPlan = JSON.parse(localStorage.getItem('planData'))
    const planCardRef = useRef()
    const price = billingSelected == 'yearly' ? planData.YearlyPrice : planData.monthlyPrice

    const selectedStyles = {
        border: '1px solid hsl(213, 96%, 18%)',
    }

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

    function markAsSelected() {
        if (props.default && !selectedPlan) {
            return true;
        }

        return haveBeenPreviouslySelected()
    }


    useEffect(()=>{
        if (haveBeenPreviouslySelected()) {
            localStorage.setItem('planData', JSON.stringify({type: planData.type, price: price}))
        }
        else if (props.default && !selectedPlan) {
            localStorage.setItem('planData', JSON.stringify({type: planData.type, price: price}))
        }
    }, [price])

    return (
        <div
            style={markAsSelected() ? selectedStyles : null}
            className="plan-card"
            onClick={selectPlan}
            ref={planCardRef}>
            <img src={`${planData.icon}`} className="plan-icon"/>
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

