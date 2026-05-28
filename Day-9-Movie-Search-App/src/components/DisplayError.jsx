export default function DisplayErr({ error }){
    return (
        <div>
            <p>{error.message}</p>
        </div>
    )
}