import { useState } from "react"
import ProgressBar from "./ProgressBar"

export default function Step1({ formData, onChange, onNext, currentStep }) {

    const [errors, setErrors] = useState({
        age: '',
    })

    function handleBlur(e) {
        if (e.target.value < 13 || e.target.value > 99) {
            setErrors({ ...errors, age: "Error, Invalid Age" })
        } else {
            setErrors({ ...errors, age: "" })
        }
    }

    return(
        <div className="step">
            <h1 className="form-title">Personal Info</h1>
            <ProgressBar currentStep={currentStep} />  
            <div className="field">
                <label>First Name</label>
                <input
                    value={formData.firstName}
                    onChange={e => onChange({ ...formData, firstName: e.target.value })}
                />
            </div>
            <div className="field">    
                <label>Last Name</label>
                <input
                    value={formData.lastName}
                    onChange={e => onChange({ ...formData, lastName: e.target.value })}
                />
            </div>
            <div className="field">    
                <label>Age</label>
                <input
                    name="age"
                    value={formData.age}
                    onChange={e => onChange({ ...formData, age: e.target.value })}
                    onBlur={handleBlur}
                />
                {errors.age && <p className="error-text">{errors.age}</p>}
            </div>
            <div className="btn-row"> 
                <button className="btn-primary" onClick={onNext} disabled={ formData.firstName === "" || formData.lastName === "" || formData.age === "" || errors.age !== ""}>Next</button>
            </div>    
        </div>    
    )
}