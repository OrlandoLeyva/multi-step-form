/* eslint-disable react/prop-types */
import { createContext } from "react";

const stepContextObj = createContext()

function StepContext(props) {
    return (
        <stepContextObj.Provider value={1}>
            {props.children}
        </stepContextObj.Provider>
    )
}

export {StepContext, stepContextObj}
