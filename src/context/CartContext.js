import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [] }) // contexto

export const CartProvider = ({ children }) => { // función con l+ogica del carrito

    const [cart, setCart] = useState([])

    console.log(cart)

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    const total = cart.reduce((total, item) => total + (item.quantity*item.price), 0);

    const addItem = (item, quantity) => { // añadir elemento a carrito
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
        }else{
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => { // eliminar item por id
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => { // vaciar carrito
        setCart([])
    }

    const isInCart = (itemId) => { // ¿está en carrito?
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{totalQuantity, cart, addItem, removeItem, clearCart, total }}>
            {children}
        </CartContext.Provider>
    )
}