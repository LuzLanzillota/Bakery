import Button from "./Button";
import Footer from "./Footer";
import "./Novedades.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";
function Novedades(params) {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {showLoader && <Loader />}

            <div>
                <h1 className="novedades">Novedades</h1>

                <div className="card-card">
                    <Link to="/nuevas-aperturas" className="card-item">
                        <img src="/images/Nuevas-aperturas.png" alt="Nuevas aperturas" />
                        <p>Nuevas aperturas Bakery</p>
                    </Link>

                    <Link to="/nueva-linea" className="card-item">
                        <img src="/images/Nuevas-lineas.png" alt="Nueva línea" />
                        <p>¡Nueva línea Pattiserie!</p>
                    </Link>

                    <Link to="/nuevo-estilo" className="card-item">
                        <img src="/images/Nuevo-estilo.png" alt="Nuevo estilo" />
                        <p>Un nuevo estilo</p>
                    </Link>

                    <Link to="/regala-box" className="card-item">
                        <img src="/images/Regala-bakery.png" alt="Bakery box" />
                        <p>Regalá Bakery box</p>
                    </Link>
                </div>
                <div className="image-8">
                    <img src="./images/Group 883.png" alt="Imagen artículo" />
                    <Link to="/celiacos">
                        <Button>LEER ARTÍCULO</Button>
                    </Link>
                </div>
                <Footer />
            </div>

        </>
    );
}


export default Novedades;