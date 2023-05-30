/* eslint-disable react/prop-types */
import NumberedIndicator from "./NumberedIndicator"

export default function StepIndicator(props) {
    const {data} = props
    return (
        <div className="step-indicator">
            <NumberedIndicator value={data.step} />
            <div className="sidebar-info">
                <h3>{`STEP ${data.step}`}</h3>
                <h2>{data.title}</h2>
            </div>
        </div>
    )
}