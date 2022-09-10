

export const ItemDetail = ({ item }) => {

    return (
        <div className="perfil-card-container-details">
            <div className="perfil-card">
                <img src={item.imagen} alt={item.nombre} />
                <p>{item.nombre}</p>
                <p>{item.precio}</p>
                <p>Stock:{item.stock}</p>
            </div>
        </div>
    )
}