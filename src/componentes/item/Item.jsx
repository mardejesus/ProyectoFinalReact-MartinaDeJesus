import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ id, name, img, price, stock }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Precio: ${price}</Card.Text>
                <Card.Text>Stock disponible: ${stock}</Card.Text>
            </Card.Body>
            <footer className='ItemFooter'>
                <Button className='Option' variant="primary">Ver detalle</Button>
            </footer>
        </Card>
    )

}

export default Item