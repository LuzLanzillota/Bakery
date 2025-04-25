import React, { useState, useEffect } from "react";
import "./NuevoEstilo.css";
import Loader from "./Loader";
import Footer from "./Footer";

function NuevoEstilo() {
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
        <section className="estilo-section">
            <div className="estilo-fondo"></div>
            <div className="estilo-content">
                <h2>Un nuevo estilo </h2>
                <p className="bakery">
                    En Buenos Aires Bakery, evolucionamos hacia un estilo más moderno, fusionando tradición con innovación. Renovamos nuestro espacio, incorporamos tecnología y ampliamos nuestra oferta con opciones más saludables y aptas para todos. Más que una panadería, somos una experiencia renovada, adaptada al ritmo de hoy.
                    <br />
                    ¡Vení a descubrir la nueva era de Buenos Aires Bakery!
                </p>
                <hr />

                <div className="estilo">

                    <img src="/images/estilo-1.png" />
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default NuevoEstilo;

