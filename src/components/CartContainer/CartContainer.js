import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
export const CartContainer = () => {
    const { productCartList, removeItem, clear, getTotalPrecio } = useContext(CartContext)
    return (
        <div>

            {productCartList.length > 0 ?
                <div>
                    {productCartList.map(item => (
                        <div>
                            <p>{item.nombre}</p>
                            <p>Cantidad:{item.cantidad}</p>
                            <p>Precio c/u: €{item.precio}</p>
                            <p>Precio productos: €{item.cantidadPrecio}</p>
                            <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
                        </div>
                    ))}
                    <button onClick={clear}>Vaciar el carrito</button>
                    <h2>Precio total: €{getTotalPrecio()}</h2>
                </div>
                :
                <>
                    <p>El carrito esta vacio</p>
                    <Link to='/' style={{ color: 'black' }}>
                        Ir al listado de productos</Link>
                </>
            }
        </div>
    )
}
