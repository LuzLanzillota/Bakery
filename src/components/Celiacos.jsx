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
            <div className="celiacos-fondo"></div>
            <div className="celiacos-content">
                <div className="celiacos-card">
                    <img src="\images\testo-celiacos.png" alt="" />
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Celiacos;
