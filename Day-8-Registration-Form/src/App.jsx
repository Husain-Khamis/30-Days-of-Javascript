import { useState } from "react"
import './App.css'
import FormField from "./components/FormField"
import PasswordStrength from "./components/PasswordStrength"
import SubmitButton from "./components/SubmitButton"
import SuccessCard from "./components/SuccessCard"

const fields = [
  { label: 'First Name', type: 'text', name: 'firstName' },
  { label: 'Last Name', type: 'text', name: 'lastName' },
  { label: 'Email', type: 'email', name: 'email' },
  { label: 'Password', type: 'password', name: 'password' },
  { label: 'Confirm Password', type: 'password', name: 'confirmPassword' },
  { label: 'Age', type: 'number', name: 'age' },
  { label: 'Country', type: 'text', name: 'country' },
]

function App() {
  const [formData, setFormData] = useState({ 
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    country: ''
  })

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    country: ''
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function validate (name, value, formData) {
    if (name === 'firstName') {
      if (value.length === 0) return 'First Name is Required'
    }
    if (name === 'lastName') {
      if (value.length === 0 ) return 'Last Name is required'
    }
    if (name === 'email') {
      if (value.length === 0 ) return 'Email is required'
      if (!value.includes('@')) return 'Enter a Valid Email Address'
    }
    if (name === 'password') {
      if (value.length < 8 ) return 'Password must be atleast 8 Characters'
    }
    if (name === 'confirmPassword') {
      if (value !== formData.password ) return 'Password is not matching'
    }
    if (name === 'age') {
      if (value < 16 ) return 'Age must be above 16'
    }
    if (name === 'country') {
      if (value.length === 0 ) return 'Country is required'
    }
    return ''
  }

  function handleBlur(e) {
    const error = validate(e.target.name, e.target.value, formData)
    setErrors({...errors, [e.target.name]: error})
  }

  const isValidForm = Object.values(errors).every(error => error === '') && Object.values(formData).every(value => value !== '')

  function handleSubmit() {
    setSubmitted(true)
  }

  return (
    <div className="form-container">
      {submitted ? (
        <SuccessCard formData={formData} />
      ) : (
        <>
        <h1>Registration Form</h1>
        {fields.map(field => (
        <FormField
          key={field.name}
          label={field.label}
          type={field.type}
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors[field.name]}
        />
      ))}
      <PasswordStrength password={formData.password} />
      <SubmitButton disabled={!isValidForm} onSubmit={handleSubmit} />
        </>
      )}
    </div>
  )
}

export default App