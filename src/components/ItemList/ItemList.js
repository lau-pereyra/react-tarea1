import Item from "../Item/Item"
const ItemList = ({ itemsList }) => {
    return (
        <>
            {
                itemsList.map((personas) => {
                    return (
                        <Item
                            key={personas.id}
                            nombre={personas.nombre}
                            imagen={personas.imagen}
                            item={personas}
                        />
                    )
                })
            }
        </>
    )
}
export default ItemList;