import ItemCount from "./ItemCount";
const Item = ({ nombre, precio, stock, imagen }) => {
    return (
        <div className="perfil-card-container">
            <div className="perfil-card">
                <img src={imagen} alt={nombre} />
                <h1>{nombre}</h1>
                <p>{precio}</p>
                <p>Stock:{stock}</p>
                <ItemCount></ItemCount>
            </div>
        </div>
    )
}
export default Item;