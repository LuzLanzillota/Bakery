import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Loader from "./Loader";
import "./Inicio.css";

function Inicio() {
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

            <div style={{ display: showLoader ? 'none' : 'block' }}>
                <div className="image-1">
                    <img src="/images/PanDelNuestro_Inicio.jpg" alt="Pan Del Nuestro" />
                </div>
                <div className="image-2">
                    <img src="/images/NuestrosProductos_Inicio.png" alt="" />
                </div>
                <div className="image-3">
                    <img src="/images/SobreNosotros_Inicio.png" alt="" />
                </div>
                <div className="image-3">
                    <img src="/images/QueresTenerTuFranquicia__Inicio.png" alt="" />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Inicio;
