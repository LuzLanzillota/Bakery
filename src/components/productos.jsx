import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";
import "./productos.css";
import { useState, useEffect } from "react";
import Loader from "./Loader";
function Productos(params) {
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
                <div className="image-1">
                    <img src="\images\NuestrosProductos_Productos.png" alt="" />
                </div>
                <div className="productos">
                <ItemListContainer />
                </div>
                <Footer />
            </div>
        </>
    );
}
export default Productos;
