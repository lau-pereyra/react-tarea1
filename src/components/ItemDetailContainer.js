import { useState, useEffect } from "react";
import data from './mock-data';
import { ItemDetail } from "./ItemDetail";
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const { productId } = useParams()
    const [item, setItem] = useState({})

    const getItem = (id) => {
        return new Promise((resolve, reject) => {
            const productito = data.find(item => item.id === parseInt(id))
            resolve(productito)
        })
    }
    useEffect(() => {
        const getProducto = async () => {
            const producto = await getItem(productId);
            setItem(producto);
        }
        getProducto();
    }, [productId])
    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}