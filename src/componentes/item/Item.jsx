import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import './Item.css'

const Item = ({ id, name, img, price, stock }) => {

    return (
        <Card style={{ width: '16rem' }}>
            <div className='imagen'><Card.Img src={img} /></div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Precio: ${price}</Card.Text>
                <Card.Text>Stock disponible: {stock}</Card.Text>
            </Card.Body>
            <footer className='ItemFooter'>
                <NavLink to={`/item/${id}`}><button className='btn btn-dark'>Ver detalle</button></NavLink>
            </footer>
        </Card>
    )

}

export default Item