import ItemListContainer from "./ItemListContainer";
import "./productos.css";
function Productos(params) {
    return (
        <div>
            <div className="image-1">
                <img src="\images\NuestrosProductos_Productos.png" alt="" />
            </div>
            <ItemListContainer/>
        </div>
    );
}
export default Productos;
