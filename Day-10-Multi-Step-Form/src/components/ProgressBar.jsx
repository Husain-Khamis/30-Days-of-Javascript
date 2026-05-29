export default function ProgressBar({ currentStep }) {

    const percentage = (currentStep / 4) * 100

    return(
        <>
            <progress max={100} value={percentage}></progress>
        </>
    )
}