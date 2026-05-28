export default function DisplayErr({ error }){
    return (
        <div className="error-message">
            <p>{error.message}</p>
        </div>
    )
}