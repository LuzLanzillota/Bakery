import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
const [isOpen, setIsOpen] = useState(false);


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


{/* Ícono de menú hamburguesa */}
<button
className="hamburger-button"
onClick={() => setIsOpen(!isOpen)}
>
<img
src="/images/icono-hamburguesa.png" /* reemplazar con la imagen real */
alt="Menú"
className="hamburger-icon"
/>
</button>


<nav className={`navbar ${isOpen ? "open" : ""}`}>
<ul className="nav-links">
<li><NavLink to="/" onClick={() => setIsOpen(false)}>Inicio</NavLink></li>
<li><NavLink to="/productos" onClick={() => setIsOpen(false)}>Productos</NavLink></li>
<li><NavLink to="/sucursales" onClick={() => setIsOpen(false)}>Sucursales</NavLink></li>
<li><NavLink to="/novedades" onClick={() => setIsOpen(false)}>Novedades</NavLink></li>
</ul>
</nav>
</header>
);
}


export default NavBar;