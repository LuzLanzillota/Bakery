import React, { useState, useEffect } from "react";
import "./NuevasAperturas.css";
import Loader from "./Loader";
import Footer from "./Footer";

function NuevasAperturas() {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (showLoader) {
        return <Loader />;
    }

    return (
        <section className="aperturas-section">
            <div className="aperturas-fondo"></div>
            <div className="aperturas-content">
                <h2>Nuevas aperturas Bakery</h2>
                <p className="testo">
                    ¡Seguimos creciendo! Esta vez, celebramos la inauguración de tres nuevos locales, donde podrás encontrar más de 200 productos para disfrutar en cualquier momento del día, al igual que en nuestras otras 40 sucursales.
                </p>
                <hr />

                <div className="apertura">
                    <h3>Nuevo Bakery en Colegiales</h3>
                    <p>Vení a conocerlo en Elcano 3288 de lunes a domingos de 07:30 a 20:00.</p>
                    <img src="/images/bakery-colegiales.png" alt="Bakery Colegiales" />
                </div>

                <div className="apertura">
                    <h3>Nuevo Bakery en Martínez</h3>
                    <p>Vení a conocerlo en Alvear 73 de lunes a domingos de 07:30 a 20:00.</p>
                    <img src="/images/bakery-martinez.png" alt="Bakery Martínez" />
                </div>

                <div className="apertura">
                    <h3>Nuevo Bakery en Recoleta</h3>
                    <p>Vení a conocerlo en Laprida 1540 de lunes a domingos de 07:30 a 20:00.</p>
                    <img src="/images/bakery-recoleta.png" alt="Bakery Recoleta" />
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default NuevasAperturas;

