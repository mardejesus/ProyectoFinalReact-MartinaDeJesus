import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import { getProductById, getProducts, getProductByCategory } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]); // Almacena productos
  const {categoryId} = useParams()

//  useEffect(() => {
//    // Función para obtener productos que retorna una promesa. Guardamos la respuesta en el estado.
//    const asyncFunc = categoryId ? getProductByCategory : getProducts
//
//    asyncFunc(categoryId)
//      .then(response => {setProducts(response);})
//      .catch(error => {console.error(error);});
//  }, [categoryId]);

  useEffect(() => {
    const coleccionDeProductos = categoryId ? query(collection(db, 'productos'), where('category', '==', categoryId)) : collection(db, 'productos') // trae una colección de mi base de datos
    getDocs(coleccionDeProductos)
    .then((res) => {
      const list = res.docs.map((prod) => {
        return {id: prod.id, ...prod.data()}
      })
      setProducts(list)
    })
    .catch((error) => console.log(error))
  },[categoryId])

  return (
    <div>
      <p className='texto-presentacion'>{greeting}</p>
      <div className='itemsContainer'>
        <ItemList products={products} /> {/* Se encarga de listar productos */}
      </div>
    </div>
  );
};

export default ItemListContainer;
