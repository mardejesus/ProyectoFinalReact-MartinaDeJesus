import {useState, useEffect} from 'react'
import {getProductById} from '../../asyncMock'
import ItemDetail from '../itemDetail/ItemDetail'

{/*
Encargado de la logica de estado del detalle del producto
Logica parecida a ItemListContainer.
Muestra 1 de los productos.
*/}

const ItemDetailContainer = ()=>{

    const [product, setProduct] = useState(null)

    useEffect(()=>{
        getProductById(1)
        .then(response=>setProduct(response))
        .catch(error=>{console.error(error)})
    }, [])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/> {/*Componente de presentacion encargado de visualizar datos. Pasamos como props todas las propiedades del producto, desestructuramos objeto.*/}
        </div>
    )
}

export default ItemDetailContainer;

