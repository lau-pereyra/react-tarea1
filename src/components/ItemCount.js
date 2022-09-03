import { useState } from "react"

const ItemCount = () => {

    const [contador, setContador] = useState(0);
    const suma = () => {
        setContador(contador + 1)
    }
    const resta = () => {
        setContador(contador - 1)
    }
    return (

        <div className="button-container">
            <button id="button" className={contador === 0 ? 'deshabilitado' : ''} onClick={resta}>-</button>
            <div className="contador-container">{contador}</div>
            <button id="button" className={contador === 20 ? 'deshabilitado' : ''} onClick={suma}>+</button>
        </div >
    )

}

export default ItemCount;