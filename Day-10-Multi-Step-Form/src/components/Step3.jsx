import ProgressBar from "./ProgressBar"

const interests = ["Gaming", "Cooking", "Traveling", "Music", "Sports", "Reading", "Coding"]

export default function Step3({ formData, onChange, onNext, onBack, currentStep }) {

    function handleToggle(value) {
        const updatedPreferences = formData.preferences.includes(value)
            ? formData.preferences.filter((preference) => preference !== value)
        : [...formData.preferences, value]

        onChange({ ...formData, preferences: updatedPreferences })
    }

    return (
        <div className="step">
            <h1 className="form-title">Your Interests</h1>
            <ProgressBar currentStep={currentStep} />  
            <div className="field">
                <div className="preferences-grid">
                    {interests.map((interest) => (
                        <button
                            key={interest}
                            className={`preference-btn ${formData.preferences.includes(interest) ? 'selected' : ''}`}
                            onClick={() => handleToggle(interest)}
                            >
                            {interest}
                        </button>
                    ))}
                </div>
                <div className="btn-row"> 
                <button className="btn-secondary" onClick={onBack}>Back</button>
                <button className="btn-primary" onClick={onNext} disabled={ formData.preferences.length === 0 }>Next</button> 
                </div>    
            </div>
        </div>
    )
}