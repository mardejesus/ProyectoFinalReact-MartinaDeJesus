import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    return totalQuantity === 0 ? ( // si el carrito está vacío retorna una cosa, si no, retorna los productos en carrito.
        (
            <div>
                <h2>Carrito vacío</h2>
                <Link to='/' className='Option'><button type="button" className="btn btn-primary">Productos</button></Link>
            </div>
        )
    ) : (
        (
            <div>
                { }
                <h3>Total: ${total}</h3>
                <button type="button" className="btn btn-primary" onClick={() => clearCart()}>Vaciar carrito</button>
                <Link to='/checkout' className='Option'><button type="button" className="btn btn-primary">Checkout</button></Link>
            </div>
        )
    )

}

export default Cart