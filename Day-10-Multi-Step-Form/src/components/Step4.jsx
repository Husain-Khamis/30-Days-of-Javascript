import { useState } from "react"
import ProgressBar from "./ProgressBar"

export default function Step4({ formData, onChange, onNext, onBack, currentStep }) {

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    function handleSubmit() {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setIsSuccess(true)
        }, 2000)
    }

    if (isLoading) return <p>Submitting...</p>
    if (isSuccess) return (
        <div className="success-screen">
            <h2 className="success-title">Welcome, {formData.firstName} {formData.lastName}!</h2>
            <p className="success-message">Your account has been created successfully.</p>
        </div>
    )

    return (
    <div className="step">
        <h2 className="review-title">Review Your Info</h2>
        <ProgressBar currentStep={currentStep} />  
        
        <div className="field">
        <label>Full Name</label>
        <p>{formData.firstName} {formData.lastName}</p>
        </div>

        <div className="field">
        <label>Age</label>
        <p>{formData.age}</p>
        </div>

        <div className="field">
        <label>Username</label>
        <p>{formData.username}</p>
        </div>

        <div className="field">
        <label>Email</label>
        <p>{formData.email}</p>
        </div>

        <div className="field">
            <label>Interests</label>
            <div className="preferences-review">
                {formData.preferences.map((preference) => (
                <span key={preference} className="preference-tag">{preference}</span>
                ))}
            </div>
        </div>
        <div className="btn-row"> 
            <button className="btn-secondary" onClick={onBack}>Back</button>
            <button className="btn-primary" onClick={handleSubmit}>Submit</button>
        </div>    
    </div>
    )
}