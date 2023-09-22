import React from 'react'
import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <p className='texto-presentacion'>{greeting}</p>
    </div>
  )
}

export default ItemListContainer
