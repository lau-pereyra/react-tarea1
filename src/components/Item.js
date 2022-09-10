import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom'
const Item = ({ item }) => {
    return (
        <div className="perfil-card-container">
            <div className="perfil-card">
                <img src={item.imagen} alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <ItemCount></ItemCount>
                <Link to={`/item/${item.id}`} >
                    <button className="button-detalles">Ver detalles</button>
                </Link>
            </div>
        </div>
    )
}
export default Item;