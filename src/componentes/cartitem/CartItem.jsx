import { useContext } from "react";
import { createContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({item}) => {

    const {id, name, price, quantity} = item;
    const {removeItem} = useContext(CartContext);

    const handleRemove = () => {
        removeItem(id);
    }

    return(

        <div className="CardContenedorCarrito">
            <article className="CardItemCarrito">
                <header className="Header">
                    <h2 className="ItemHeader">{name}</h2>
                </header>
                <section>
                    <p className="Info">Precio: ${price}</p>
                </section>
                <section>
                    <p className="Info">Cantidad: {quantity}</p>
                </section>
                <footer className="ItemFooter">
                    <button className="" onClick={handleRemove}>
                        X
                    </button>
                </footer>
            </article>
        </div>

    )

}

export default CartItem