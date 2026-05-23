import { useState } from "react";

function SubmitButton({ disabled, onSubmit }) {
    return(
        <>
            <button disabled={disabled} onClick={onSubmit}>Submit</button>
        </>
    )
}

export default SubmitButton