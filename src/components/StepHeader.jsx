/* eslint-disable react/prop-types */
export default function StepHeader(props) {
    const {title, description} = props
    return (
        <div className="step-header">
            <h2 className="step-page-title">{title}</h2>
            <p className="step-page-description">{description}</p>
        </div>
    )
}