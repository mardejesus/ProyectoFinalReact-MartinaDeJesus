import React, { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import { getProducts } from '../../asyncMock';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]); // Almacena productos

  useEffect(() => {
    // Función para obtener productos que retorna una promesa. Guardamos la respuesta en el estado.
    getProducts()
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <p className='texto-presentacion'>{greeting}</p>
      <ItemList products={products} /> {/* Se encarga de listar productos */}
    </div>
  );
};

export default ItemListContainer;
