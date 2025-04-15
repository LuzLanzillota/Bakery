import Button from "./Button";
import "./Novedades.css";
function Novedades(params) {
    return (
        <div>
            <h1>Novedades</h1>
            <div className="card-card">
                <div className="card-item">
                    <img src="\images\Nuevas-aperturas.png" alt="Nuevas aperturas" />
                    <p>Nuevas aperturas Bakery</p>
                </div>
                <div className="card-item">
                    <img src="\images\Nuevas-lineas.png" alt="Nueva línea" />
                    <p>¡Nueva línea Pattiserie!</p>
                </div>
                <div className="card-item">
                    <img src="\images\Nuevo-estilo.png" alt="Nuevo estilo" />
                    <p>Un nuevo estilo</p>
                </div>
                <div className="card-item">
                    <img src="\images\Regala-bakery.png" alt="Bakery box" />
                    <p>Regalá Bakery box</p>
                </div>
            </div>
            <div className="image-8">
                <img src="\images\Group 883.png" alt="" />
                <Button>LEER ARTÍCULO</Button>
            </div>
        </div>
    );
}


export default Novedades;