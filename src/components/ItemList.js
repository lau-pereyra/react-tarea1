import Item from "./Item"
const ItemList = ({ itemsList }) => {
    // console.log(itemsList)
    return (
        <>
            {
                itemsList.map((personas) => {
                    return (
                        <Item
                            key={personas.id}
                            nombre={personas.nombre}
                            precio={personas.precio}
                            stock={personas.stock}
                            imagen={personas.imagen}
                        />
                    )
                })
            }
        </>
    )
}
export default ItemList;