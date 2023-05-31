/* eslint-disable react/prop-types */

export default function BillingSwitcher(props) {
    const {billingSelected, setBillingSelected} = props.data

    function yearlyPlan(){
        localStorage.setItem('selectedBilling', 'yearly')
        setBillingSelected('yearly')
    }
    function monthlyPlan(){
        localStorage.setItem('selectedBilling', 'monthly')
        setBillingSelected('monthly')
    }

    function isSelected(billing) {
        return billing == billingSelected;
    }

    return (
        <div className="billing-switcher">
            <button 
                className={`select-billing-button ${isSelected('monthly') ? 'selected' : ''}`} 
                onClick={monthlyPlan} >
                    Monthly
            </button>
            <div 
                className={`switcher-indicator ${billingSelected == 'yearly' ? 'yearly-selected' : 'monthly-selected'}`}>
                    <span ></span>
            </div>
            <button 
                className={`select-billing-button ${isSelected('yearly') ? 'selected' : ''}`} 
                onClick={yearlyPlan}>
                    Yearly
                </button>
        </div>
    )
}