import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
export const CartContainer = () => {
    const { productCartList, removeItem, clear, getTotalPrecio } = useContext(CartContext)
    const [idOrder, setIdOrder] = useState("")


    const sendOrder = (event) => {
        event.preventDefault()
        const order = {
            buyer: {
                name: event.target[0].value,
                phone: event.target[1].value,
                email: event.target[2].value
            },
            items: productCartList,
            total: getTotalPrecio()
        }
        console.log(order)
        const queryRef = collection(db, "orders")
        addDoc(queryRef, order).then(response => {
            console.log(response, "response")
            setIdOrder(response.id)
            clear()
        })
    }

    const updateOrder = () => {
        const queryRef = doc(db, "orders", "ydFvy70s1ZCTPbUqBQ86")
        updateDoc(queryRef, {
            buyer: {
                name: "carlitos carlos",
                phone: "13123",
                email: "carlitis@gmail.com"
            },
            items: [
                {
                    categoria: "violeta",
                    imagen: "https://robohash.org/4",
                    precio: 100,
                    cantidad: 1,
                    cantidadPrecio: 100,
                    nombre: "Jack"
                }
            ],
            total: 80
        }).then(response => console.log(response))
    }
    return (
        <div>
            {/* <button onClick={updateOrder}>Actualizar orden</button> */}
            {idOrder ?
                <>
                    <p>Su orden ha sido creada: Id {idOrder}</p>
                    <Link to='/' style={{ color: 'black' }}>
                        Ir al listado de productos</Link></>
                :
                <div>
                    {
                        productCartList.length > 0 ?
                            <div className="background-cart">
                                <div>
                                    {productCartList.map(item => (
                                        <div>
                                            <div className="cart-items-container">
                                                <img className="cart-item-image" src={item.imagen}></img>
                                                <p>NFT: {item.nombre}</p>
                                                <p>Cantidad: {item.cantidad}</p>
                                                <p>Precio c/u: €{item.precio}</p>
                                                <p>Precio total de los productos: €{item.cantidadPrecio}</p>
                                            </div>
                                            <button id="button" onClick={() => removeItem(item.id)}>Eliminar producto</button>
                                        </div>
                                    ))}
                                    <button id="button" onClick={clear}>Vaciar el carrito</button>
                                    <h2>Precio total: €{getTotalPrecio()}</h2>
                                    <form onSubmit={sendOrder}>
                                        <label>Nombre:</label>
                                        <input type="text" />
                                        <label>Telefono:</label>
                                        <input type="text"></input>
                                        <label>Email:</label>
                                        <input type="email"></input>
                                        <button id="button" type="submit">Enviar Orden</button>
                                    </form>
                                </div>
                            </div>
                            :
                            <>
                                <p>El carrito esta vacio</p>
                                <Link to='/' style={{ color: 'black' }}>
                                    Ir al listado de productos</Link>
                            </>
                    }
                </div>
            }


        </div>
    )
}
