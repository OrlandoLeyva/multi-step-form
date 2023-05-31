import { useContext, useEffect, useState } from "react"
import BackButton from "../components/BackButton"
import NextButton from "../components/NextButton"
import StepHeader from "../components/StepHeader"
import PlanCard from "../components/PlanCard"
import BillingSwitcher from "../components/BillingSwitcher"

// IMAGES
import image from '../assets/images/icon-arcade.svg'

import { stepContextObj } from "../Context/StepContext"

export default function StepTwo() {
    const {setStep, billingSelected, setBillingSelected} = useContext(stepContextObj)
    // const [billingSelected, setBillingSelected] = useState('yearly')
    const [selectedPlan, setSelectedPlan] = useState(null)

    useEffect(()=>{
        setStep(2)
    }, [])
    
    function select(ref){
        setSelectedPlan(prevSelected =>{
            if (selectedPlan) {
                prevSelected.classList.remove('plan-selected')
            }
            ref.current.classList.add('plan-selected')
            setSelectedPlan(ref.current)
        })
    }

    return (
        <div className="step-page">
            <StepHeader title='Select your plan' description='You have the option of monthly or yearly billing'/>

            <div className="plan-cards">
                <PlanCard 
                    planData={{
                        icon: {image},
                        type: 'Arcade',
                        monthlyPrice: 9 ,
                        YearlyPrice: 90,
                        offer: '2 months free'
                        }
                    }
                    select={select}
                    billingSelected={billingSelected}
                    default={true}
                    />

                <PlanCard 
                    planData={{
                        icon: '/src/assets/images/icon-advanced.svg',
                        type: 'Advanced',
                        monthlyPrice: 12 ,
                        YearlyPrice: 120,
                        offer: '2 months free'
                        }
                    }
                    select={select}
                    billingSelected={billingSelected}
                    default={false}
                    />

                <PlanCard 
                    planData={{
                        icon: '/src/assets/images/icon-pro.svg',
                        type: 'Pro',
                        monthlyPrice: 15 ,
                        YearlyPrice: 150,
                        offer: '2 months free'
                        }
                    }
                    select={select}
                    billingSelected={billingSelected}
                    default={false}
                    />

            </div>

            <BillingSwitcher data={{billingSelected, setBillingSelected}} />

            <div className="navigation-buttons">
                <BackButton />
                <NextButton/>
            </div>
        </div>
    )
}