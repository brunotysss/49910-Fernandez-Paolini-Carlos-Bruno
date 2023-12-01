import './ItemListContainer.css'



const ItemListContainer = ({greeting}) => {
    return (
   <section className="list__container">
     <h2 className="list__title">Productos</h2>
    <p> {greeting}</p>
   </section>
)

}

export default ItemListContainer