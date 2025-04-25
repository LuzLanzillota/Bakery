import React, { useState, useEffect } from "react";
import "./NuevasLinea.css";
import Loader from "./Loader";
import Footer from "./Footer";

function NuevasLineas() {
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
        <section className="linea-section">
            <div className="linea-fondo"></div>
            <div className="linea-content">
                <h2>Nueva línea pattiserie</h2>
                <p>
                    Te presentamos nuestra nueva línea de patisserie, donde encontrarás tentadoras delicias como croissants, pain au chocolat y rolls de canela. <br />
                    ¡Vení a probar nuestra nuevas exquisiteces!
                </p>
                <hr />

                <div className="linea">

                    <img src="/images/linea-1.png" alt="Bakery Colegiales" />
                </div>

                <div className="linea">
                    <img src="/images/linea-2.png" alt="Bakery Martínez" />
                </div>

                <div className="linea">
                    <img src="/images/linea-3.png" alt="Bakery Recoleta" />
                </div>
                <div className="linea">
                    <img src="/images/linea-4.png" alt="Bakery Recoleta" />
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default NuevasLineas;


