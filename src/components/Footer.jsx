import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-left">
                        <img src="\images\logo-Bakery-blanco.png" alt="Bakery Logo" className="logo-footer" />
                        <p>© 2025 · Buenos Aires Bakery</p>
                        <hr />
                        <nav>
                            <Link to="/" className="footer-link">
                                TRABAJÁ CON NOSOTROS
                            </Link>
                        </nav>
                    </div>

                    <div className="footer-right">
                        <p>Seguinos en redes sociales:</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/BuenosAiresBakery" target="_blank" rel="noopener noreferrer">
                                <div className="icon-box" aria-label="Facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/ba.bakeryoficial/" target="_blank" rel="noopener noreferrer">
                                <div className="icon-box" aria-label="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
