import Item from '../item/Item'
import './ItemList.css'

const ItemList = ({products})=>{

    return(
        <div className='ListGroup'>
            {products.map(prod=><Item key={prod.id} {...prod}></Item>)}
        </div>
    )
}
{/*Por cada producto, los organiza en cards (en Item).*/}

export default ItemList