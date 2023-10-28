import ItemCount from "../itemCount/ItemCount";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemDetail.css'
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)   // estado de carrito

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => { // actualiza estado, luego llama a funcionalidad de carrito addItem()
        setQuantityAdded(quantity)
        const item = {id, name, price}
        addItem(item, quantity)
    }

    return (
        <div className="myCard" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Precio: ${price}</Card.Text>
                <Card.Text>Stock disponible: {stock}</Card.Text>
                <Card.Text>Categoría: {category}</Card.Text>
                <Card.Text>Descripción: {description}</Card.Text>
            </Card.Body>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className="Option"><button type="button" className="btn btn-primary">Finalizar compra</button></Link>
                    ) : (
                        <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd}></ItemCount>
                    )
                }
            </footer>
        </div>
    )

}

export default ItemDetail;