import { useContext, useEffect, useRef, useState } from "react"
import BackButton from "../components/BackButton"
import NextButton from "../components/NextButton"
import StepHeader from "../components/StepHeader"
import PlanCard from "../components/PlanCard"
import BillingSwitcher from "../components/BillingSwitcher"

// IMAGES
import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'

import { stepContextObj } from "../Context/StepContext"

export default function StepTwo() {
    const {setStep, billingSelected, setBillingSelected} = useContext(stepContextObj)
    // const [billingSelected, setBillingSelected] = useState('yearly')
    const [selectedPlan, setSelectedPlan] = useState(null)

    let defaultRef = null

    useEffect(()=>{
        setStep(2)
    }, [])
    
    function select(ref){
        // console.log('selecting new plan', ref.current);
        // setSelectedPlan(prevSelected =>{
        //     if (selectedPlan) {
        //         console.log('prev selected true', prevSelected);
        //         prevSelected.classList.remove('plan-selected')
        //     }
        //     // console.log('ready to be selected', ref.current);
        //     ref.current.classList.add('plan-selected')
        //     // console.log('class added', ref.current);
        //     defaultRef = ref.current
        //     // console.log('default ref', defaultRef);
        //     setSelectedPlan(ref.current)
        // })

        setSelectedPlan(ref.current)
    }

    // remove
    useEffect(()=>{
        // console.log('default plan', defaultRef);
    }, [selectedPlan])

    return (
        <div className="step-page">
            <StepHeader title='Select your plan' description='You have the option of monthly or yearly billing'/>

            <div className="plan-cards">
                <PlanCard 
                    planData={{
                        icon: arcadeIcon,
                        type: 'Arcade',
                        monthlyPrice: 9 ,
                        YearlyPrice: 90,
                        offer: '2 months free'
                        }
                    }
                    select={select}
                    billingSelected={billingSelected}
                    default={true}
                    ref={defaultRef}
                    />

                <PlanCard 
                    planData={{
                        icon: advancedIcon,
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
                        icon: proIcon,
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