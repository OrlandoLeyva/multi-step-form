import StepIndicator from "./StepIndicator"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <StepIndicator data={{step: 1, title:'your info'}}/>
            <StepIndicator data={{step: 2, title:'select plan'}} />
            <StepIndicator data={{step: 3, title:'add-ons'}}/>
            <StepIndicator data={{step: 4, title:'summary'}}/>
        </div>
    )
}