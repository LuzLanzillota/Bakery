import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { FaSearch } from "react-icons/fa";

function NavBar() {
    return (
        <header className="navbar-container">
            <div className="logo-container">
                <Link to="/">
                    <img src="/images/Bakery-ecommerce-1 1.png" alt="Logo de Bakery" className="logo" />
                </Link>
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/productos">Productos</NavLink></li>
                    <li><NavLink to="/sucursales">Sucursales</NavLink></li>
                    <li><NavLink to="/novedades">Novedades</NavLink></li>
                </ul>
                <div className="search-icon">
                    <FaSearch />
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
