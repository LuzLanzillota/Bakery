import React, { useState, useEffect } from "react";
import "./Celiacos.css";
import Loader from "./Loader";
import Footer from "./Footer";

function Celiacos() {
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
        <section className="celiacos-section">
            <div className="image-1">
                <img src="/images/celiacos-banner.png" alt="" />
            </div>
            <div className="celiacos-content">
                <div class="celiacos-card">
                    <p class="celiacosp">
                        Nuestra nueva receta garantiza sabor y textura sin comprometer la seguridad alimentaria.<br />
                        Utilizamos ingredientes cuidadosamente seleccionados, como:
                    </p>

                    <ul class="ingredient-list">
                        <li>Harina de arroz</li>
                        <li>Fécula de maíz</li>
                        <li>Almidón de mandioca</li>
                        <li>Harina de almendras</li>
                        <li>Goma xántica (para mejorar la elasticidad)</li>
                        <li>Aceite vegetal y huevos frescos</li>
                    </ul>


                    <p class="celiacosp">
                        El resultado es un pan esponjoso, liviano y delicioso, ideal para acompañar cualquier comida.<br />
                        Además, pronto sumaremos más opciones dulces y saladas para que todos puedan disfrutar sin restricciones.
                    </p>

                    <p class="celiacosp">
                        ¡Te invitamos a probar nuestra nueva propuesta libre de gluten y seguir compartiendo el mejor pan, ahora para todos!
                    </p>

                    <p class="celiacosp">📍 Visitanos en nuestro local o hacé tu pedido online.</p>
                </div>
                <div className="celiacos-image-container">
                                        <div className="celiacos-triangle">
                        <img src="/images/triangulo-celiacos.png" alt="" />
                    </div>
                    <div className="imagen-celiacos">
                        <img src="/images/celiacos-image.png" alt="Imagen de celiacos" className="celiacos-image" />
                    </div>

                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Celiacos;
