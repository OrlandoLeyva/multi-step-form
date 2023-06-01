import { Link } from "react-router-dom"

export default function Error(){
    function returnHome(){
        localStorage.clear()
    }
    return (
        <div className="error-message">
            <p>Oh no! something went wrong! please <Link to='/' onClick={returnHome} className="back-home">get back to home</Link></p>
        </div>
    )
}