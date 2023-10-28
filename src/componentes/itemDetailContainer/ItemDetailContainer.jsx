import {useState, useEffect} from 'react'
import {getProductById} from '../../asyncMock'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'

{/*
Encargado de la logica de estado del detalle del producto
Logica parecida a ItemListContainer.
Muestra 1 de los productos.
*/}

const ItemDetailContainer = ()=>{

    const [product, setProduct] = useState(null)
    const {itemId} = useParams()

//    useEffect(()=>{
//        getProductById(itemId)
//        .then(response=>setProduct(response))
//        .catch(error=>{console.error(error)})
//    }, [itemId])

    useEffect(() => {
        const collectionProd = collection(db, 'productos')
        const referenciaAlDoc = doc(collectionProd, itemId)
        getDoc(referenciaAlDoc)

        .then((res) => setProduct({id: res.id, ...res.data()}))
        .catch((error) => console.log(error))
    }, [])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/> {/*Componente de presentacion encargado de visualizar datos. Pasamos como props todas las propiedades del producto, desestructuramos objeto.*/}
        </div>
    )
}

export default ItemDetailContainer;

