import data from '../mock-data';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../utils/firebase';

const ItemListContainer = () => {
    const { categoryId } = useParams()
    const [items, setItems] = useState([])

    // const getData = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(data)
    //     }, 2000);
    // })

    // useEffect(() => {
    //     getData.then(result => {
    //         if (categoryId) {
    //             const newProductos = result.filter(producto => producto.categoria === categoryId)
    //             setItems(newProductos)
    //         } else {
    //             setItems(result)
    //         }

    //     })
    // }, [categoryId])

    useEffect(() => {
        const queryRef = !categoryId ? collection(db, "items") : query(collection(db, "items"), where("categoria", "==", categoryId))
        getDocs(queryRef).then(response => {
            const resultados = response.docs.map(doc => {
                const newItem = {
                    id: doc.id,
                    ...doc.data(),
                }
                return newItem
            });
            console.log(resultados)
            setItems(resultados)
        })
    }, [categoryId])


    return (
        <>
            <ItemList itemsList={items} />
        </>
    )

};

export default ItemListContainer;