import React, { useState, useEffect } from "react";
import "./RegalaBakery.css";
import Loader from "./Loader";
import Footer from "./Footer";

function RegalaBakery() {
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
        <section className="regala-section">
            <div className="regala-fondo"></div>
            <div className="regala-content">
                <h2>Regalá Bakery box</h2>
                <p className="bakery">
                    En Bakery tenemos las opciones más dulces y ricas para regalar en esos momentos especiales.
                </p>
                <hr />

                <div className="regala">

                    <img src="/images/regala.png" />
                </div>
                <div className="regala">

                    <img src="/images/regala-faturas.png" />
                </div>
                <div className="regala">
                    <h3>¡Sumale una taza a tu combo!</h3>
                    <img src="/images/regala-taza.png" />
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default RegalaBakery;