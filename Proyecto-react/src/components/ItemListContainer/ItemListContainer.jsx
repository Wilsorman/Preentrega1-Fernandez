import "./ItemListContainer.css"


const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1 className="prop_Itemlist">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer