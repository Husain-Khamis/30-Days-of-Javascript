import { useState } from "react";

function FormField({label, type, name, value, onChange, onBlur, error}) {

    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur} 
            />
            <p>{error}</p>
        </div>
    )
}

export default FormField