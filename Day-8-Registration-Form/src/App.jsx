import { useState } from "react"
import FormField from "./components/FormField"

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

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function validate (name, value) {
    if (name=== 'firstName') {
      if (value.length === 0) return 'First Name is Required'
    }
    return ''
  }

  function handleBlur(e) {
    const error = validate(e.target.name, e.target.value)
    setErrors({...errors, [e.target.name]: error})
  }

  return (
    <>
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
    </>
  )
}

export default App