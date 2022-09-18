import React, { useState } from "react";

export const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
    const [productCartList, setProductCartList] = useState([])

    const isInCart = (productId) => {
        const productExist = productCartList.some(item => item.id === productId)
        return productExist
    }
    const addItem = (item, cantidad) => {
        console.log('item', item, 'cantidad', cantidad)
        const newProduct = {
            ...item,
            cantidad
        }
        if (isInCart(item.id)) {
            const productPos = productCartList.findIndex(product => product.id === item.id)
            const newArreglo = [...productCartList]
            newArreglo[productPos].cantidad = newArreglo[productPos].cantidad + cantidad
            newArreglo[productPos].cantidadPrecio = newArreglo[productPos].cantidad * newArreglo[productPos].precio
            setProductCartList(newArreglo)
        } else {
            const newArreglo = [...productCartList]
            newProduct.cantidadPrecio = newProduct.cantidad * newProduct.precio
            newArreglo.push(newProduct)
            setProductCartList(newArreglo)
        }
    }

    const removeItem = (itemId) => {
        const newArreglo = productCartList.filter(product => product.id !== itemId)
        setProductCartList(newArreglo)
    }

    const clear = () => {
        setProductCartList([])
    }
    const getTotalPrecio = () => {
        const totalPrecio = productCartList.reduce((acc, item) => acc + item.cantidadPrecio, 0)
        return totalPrecio
    }
    const getTotalProducto = () => {
        const totalProductos = productCartList.reduce((acc, item) => acc + item.cantidad, 0)
        return totalProductos
    }
    return (
        <CartContext.Provider value={{ productCartList, addItem, removeItem, clear, isInCart, getTotalPrecio, getTotalProducto }}>
            {children}
        </CartContext.Provider>
    )
}