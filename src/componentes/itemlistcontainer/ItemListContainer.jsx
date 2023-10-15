import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import { getProductById, getProducts, getProductByCategory } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([]); // Almacena productos
  const {categoryId} = useParams()

  useEffect(() => {
    // Función para obtener productos que retorna una promesa. Guardamos la respuesta en el estado.
    const asyncFunc = categoryId ? getProductByCategory : getProducts

    asyncFunc(categoryId)
      .then(response => {setProducts(response);})
      .catch(error => {console.error(error);});
  }, [categoryId]);

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
