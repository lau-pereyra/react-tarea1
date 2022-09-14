import { useState } from "react"
import ItemCount from "./ItemCount"

export const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(0)
    const onAdd = (dato) => {
        setCount(dato)

    }

    return (
        <div className="perfil-card-container-details">
            <div className="perfil-card">
                <img src={item.imagen} alt={item.nombre} />
                <p>{item.nombre}</p>
                <p>{item.precio}</p>
                <p>{count}</p>
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
            </div>
        </div>
    )
}