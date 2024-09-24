import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CartItem = ({ item }) => {

    const { id, name, price, quantity } = item;
    const { removeItem } = useContext(CartContext);

    const handleRemove = () => {
        removeItem(id);
    }

    return (

        <div className="CardContenedorCarrito" style={{display:'flex', justifyContent:'center'}}>
            <Card bg="secondary" text="light" style={{ width: '90%' }}>
                <Card.Body style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", alignItems:"center", justifyItems:"center"}}>
                    <Card.Title as="h5">{name}</Card.Title>
                    <Card.Text>Precio: ${price}</Card.Text>
                    <Card.Text>Cantidad: {quantity}</Card.Text>
                    <Button  onClick={handleRemove} variant="dark" style={{width:'40px'}}>x</Button>
                </Card.Body>
            </Card>
        </div>

    )

}

export default CartItem