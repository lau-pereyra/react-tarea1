import { useState, useEffect } from "react";
import data from '../mock-data'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from "../../utils/firebase";
import { doc, getDoc } from 'firebase/firestore'

export const ItemDetailContainer = () => {
    const { productId } = useParams()
    const [item, setItem] = useState({})

    // const getItem = (id) => {
    //     return new Promise((resolve, reject) => {
    //         const productito = data.find(item => item.id === parseInt(id))
    //         resolve(productito)
    //     })
    // }
    // useEffect(() => {
    //     const getProducto = async () => {
    //         const producto = await getItem(productId);
    //         setItem(producto);
    //     }
    //     getProducto();
    // }, [productId])

    useEffect(() => {
        const getProducto = async () => {
            const queryRef = doc(db, "items", productId)
            const response = await getDoc(queryRef)
            const newItem = {
                id: response.id,
                ...response.data(),
            }
            setItem(newItem)
        }
        getProducto()
    }, [productId])


    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}