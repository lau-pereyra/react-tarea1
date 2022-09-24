import { useState } from "react"
import { Link } from "react-router-dom";
const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial);

    const suma = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const resta = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }
    return (
        <>
            <p>Stock disponible: {stock}</p>
            <div className="button-container">
                <button id="button" disabled={stock === 0} onClick={resta}>-</button>
                <div className="contador-container">{contador}</div>
                <button id="button" disabled={stock === 0} onClick={suma}>+</button>
            </div >
            <button id="button-agregar" onClick={() => onAdd(contador)}>Agregar al carrito</button>
            {
                contador > 0 &&
                <Link to='/cart'><button>Ir al carrito</button></Link>

            }
        </>
    )

}

export default ItemCount;