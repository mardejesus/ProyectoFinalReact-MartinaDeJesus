import ItemCount from "../itemCount/ItemCount";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Precio: ${price}</Card.Text>
                <Card.Text>Stock disponible: ${stock}</Card.Text>
                <Card.Text>Categoría: ${category}</Card.Text>
                <Card.Text>Descripción: ${description}</Card.Text>
            </Card.Body>
            <footer className='ItemFooter'>
                <ItemCount inicial={1} stock={stock} onAdd={(cantidad)=>console.log('cantidad agregada ', cantidad)}></ItemCount>
            </footer>
        </Card>
    )

}

export default ItemDetail;