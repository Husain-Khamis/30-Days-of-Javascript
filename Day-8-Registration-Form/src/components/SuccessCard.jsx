import { useState } from "react";

function SuccessCard({ formData }) {
    return(
        <div className="success-card">
            <h2>Registration Successful!</h2>
            <p>Name: {formData.firstName} {formData.lastName}</p>
            <p>Email: {formData.email}</p>
        </div>
    )
}

export default SuccessCard