import { useState } from "react"
import ProgressBar from "./ProgressBar"

export default function Step2({ formData, onChange, onNext, onBack, currentStep }) {

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    function handleBlur(e) {
        if (e.target.name === 'email') {
            if (!e.target.value.includes('@') || !e.target.value.includes('.') ){
                setErrors({ ...errors, email: 'Enter a Valid email address'})
            } else {
                setErrors({ ...errors, email: ''})
            }
        }
        if (e.target.name === 'password'){
            if (e.target.value.length < 8) {
                setErrors({ ...errors, password: 'Password is too Short, must be 8+ Characters'})
            } else {
                setErrors({ ...errors, password: ''})
            }
        }
        if (e.target.name === 'confirmPassword'){
            if (e.target.value !== formData.password) {
                setErrors({ ...errors, confirmPassword: "Error, passwords don't match"})
            } else {
                setErrors({ ...errors, confirmPassword: ''})
            }
        }
    }

    return (
        <div className="step">
            <h1 className="form-title">Account Setup</h1>
            <ProgressBar currentStep={currentStep} />  
            <div className="field">
                <label>Username</label>
                <input
                    name="username"
                    value={formData.username}
                    onChange={e => onChange({ ...formData, username: e.target.value })}
                />
            </div>            
            <div className="field">    
                <label>Email</label>
                <input
                    name="email"
                    value={formData.email}
                    onChange={e => onChange({ ...formData, email: e.target.value })}
                    onBlur={handleBlur}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
            </div>            
            <div className="field">     
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={e => onChange({ ...formData, password: e.target.value })}
                    onBlur={handleBlur}
                />
                {errors.password && <p className="error-text">{errors.password}</p>}
            </div>            
            <div className="field">             
                <label>Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={e => onChange({ ...formData, confirmPassword: e.target.value })}
                    onBlur={handleBlur}
                />
                {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
            </div>  
            <div className="btn-row">    
                <button className="btn-secondary" onClick={onBack}>Back</button>
                <button className="btn-primary" onClick={onNext} disabled={ formData.username === "" || formData.email === "" || formData.password === "" || formData.confirmPassword === "" || errors.email !== "" || errors.password !== "" || errors.confirmPassword !== ""}>Next</button> 
            </div>
        </div>    
    )
}