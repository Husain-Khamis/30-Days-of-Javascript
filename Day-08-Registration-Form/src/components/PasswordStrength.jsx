import { useState } from "react";

function PasswordStrength ({password}) {

    function checkStrength() {
        const hasNumber = /[0-9]/.test(password)
        const hasSpecial = /[!@#$%^&*]/.test(password)

        if (password.length < 8) return 'weak'
        if (password.length >= 8 && hasNumber && hasSpecial) return 'Strong'
        if (password.length >= 8 && hasNumber) return 'Medium'
        return 'weak'
    }

    const strength = checkStrength()

    return(
        <>
            <p>Password Strength: <span style={{ color:
                strength === 'Strong' ? '#097C39' :
                strength === 'Medium' ? '#F39C12' :
                '#E74C3C'
            }}>{strength}</span></p>
        </>
    )
}

export default PasswordStrength