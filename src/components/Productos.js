import { useEffect } from "react";
import { db } from "../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore"

const Productos = () => {

    // useEffect(() => {
    //     const getData = async () => {
    //         const query = collection(db, "items")
    //         // const query = doc(db, "items", "3snJ23bfbSldnebszMGt")
    //         const response = await getDocs(query)
    //         // console.log(response)
    //         const productos = response.docs.map(doc => {
    //             const newProduct = {
    //                 ...doc.data(),
    //                 id: doc.id
    //             }
    //             return newProduct
    //         })
    //         console.log(productos)
    //         // // console.log('response', response)
    //         // const newProduct = {
    //         //     ...response.data(),
    //         //     id: response.id
    //         // }
    //         // console.log(newProduct)
    //     }
    //     getData()
    // }, [])
    useEffect(() => {
        const getData = async () => {
            const queryRef = query(collection(db, "items"), where("categoria", "==", "gris"))
            // const query = doc(db, "items", "3snJ23bfbSldnebszMGt")
            const response = await getDocs(queryRef)
            // console.log(response)
            const productos = response.docs.map(doc => {
                const newProduct = {
                    ...doc.data(),
                    id: doc.id
                }
                return newProduct
            })
            console.log(productos)
        }
        getData()
    }, [])
    return (
        <div>
            <p>Productos</p>
        </div>
    )
}

export default Productos;