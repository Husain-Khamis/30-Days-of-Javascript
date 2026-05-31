import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
    <div className="not-found">
        <h1>404</h1>
        <p>Page not found</p>
        <button className="back-button" onClick={() => navigate('/')}>Go Home</button>
    </div>
    )
}