import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar-container">

      <div className="logo-container">
        <Link to="/">
          <img
            src="/images/Bakery-ecommerce-1 1.png"
            alt="Logo de Bakery"
            className="logo"
          />
        </Link>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        <span className="material-icons">dehaze</span>
      </button>

      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Inicio</NavLink></li>
          <li><NavLink to="/productos" onClick={() => setMenuOpen(false)}>Productos</NavLink></li>
          <li><NavLink to="/sucursales" onClick={() => setMenuOpen(false)}>Sucursales</NavLink></li>
          <li><NavLink to="/novedades" onClick={() => setMenuOpen(false)}>Novedades</NavLink></li>
        </ul>
      </nav>

    </header>
  );
}

export default NavBar;