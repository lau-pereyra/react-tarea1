import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"

export const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(0)
    const { addItem } = useContext(CartContext)

    const onAdd = (dato) => {
        setCount(dato)
        addItem(item, dato)
    }

    return (
        <div className="perfil-card-container-details">
            <div className="perfil-card">
                <img src={item.imagen} alt={item.nombre} />
                <p>{item.nombre}</p>
                <p>{item.precio}</p>
                <p>{count}</p>
                <ItemCount stock={10} initial={0} onAdd={onAdd} />
            </div>
        </div>
    )
}