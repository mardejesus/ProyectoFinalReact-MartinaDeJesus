import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartWidget from "../cartwidget/CartWidget"
import CartItem from "../cartitem/CartItem"


const Cart = () => {

    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    return totalQuantity === 0 ? ( // si el carrito está vacío retorna una cosa, si no, retorna los productos en carrito.
        (
            <div style={{margin:'20px'}}>
                <h2>Carrito vacío</h2>
                <Link to='/' ><button type="button" className="btn btn-primary">Productos</button></Link>
            </div>
        )
    ) : (
        (
            <div className='contenedorCart'>
                {cart.map(item => <CartItem key={item.id} item={item} />)}                
                <h3>Total: ${total}</h3>
                <button type="button" className="btn btn-dark" onClick={() => clearCart()} style={{margin:'5px'}}>Vaciar carrito</button>
                <Link to='/checkout'><button type="button" className="btn btn-dark" style={{margin:'5px'}}>Checkout</button></Link>
            </div>
        )
    )

}

export default Cart