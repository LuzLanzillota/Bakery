import Footer from "./Footer";
import React, { useState, useEffect } from "react"; import "./sucursales.css";
import Loader from "./Loader";
function Sucursales(params) {
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
                <div className="image-5">
                    <img src="\images\SucursalesBakery.png" alt="imagen pricipal de sucursales" />
                </div>
                <div className="image-6">
                    <img src="\images\Group 882.png" alt="" />
                </div>
                <div className="image-7">
                    <img src="\images\mapa.png" alt="" />
                </div>
                <div className="image-1">
                    <img src="\images\NuestroProceso.png" alt="" />
                </div>
                <Footer />
            </div>
        </>
    );
}
export default Sucursales;