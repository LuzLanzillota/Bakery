
import "./Item.css";

function Item({ id, title, text, img, description }) {
    return (
        <div className="item-container">
            <div className="card">
                <img src={img} alt={`Imagen de ${title}`} />
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{text}</p>
                    <p className="card-description">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Item;
