import { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

export default function FormWrapper() {
    
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", age: "",
        username: "", email: "", password: "", confirmPassword: "",
        preferences: []
    })

    const [currentStep, setCurrentStep] = useState(1)

    return (
        <div className='form-wrapper'>
            {currentStep === 1 && <Step1 formData={formData} onChange={setFormData} onNext={() => setCurrentStep(currentStep + 1)} currentStep={currentStep} /> }
            {currentStep === 2 && <Step2 formData={formData} onChange={setFormData} onNext={() => setCurrentStep(currentStep + 1)} onBack={() => setCurrentStep(currentStep - 1)} currentStep={currentStep} /> }
            {currentStep === 3 && <Step3 formData={formData} onChange={setFormData} onNext={() => setCurrentStep(currentStep + 1)} onBack={() => setCurrentStep(currentStep - 1)} currentStep={currentStep} /> }
            {currentStep === 4 && <Step4 formData={formData} onChange={setFormData} onNext={() => setCurrentStep(currentStep + 1)} onBack={() => setCurrentStep(currentStep - 1)} currentStep={currentStep} /> }  
        </div>
    )
}