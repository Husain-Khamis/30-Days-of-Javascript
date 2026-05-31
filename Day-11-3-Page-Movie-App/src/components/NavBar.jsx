import { NavLink } from "react-router-dom";

export default function NavBar() {

    return(
        <nav className="navbar">
            <span className="nav-logo">Movie Search</span>
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/search">Search</NavLink>
            </div>
        </nav>
    )
}