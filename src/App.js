import React from 'react';
import './App.css';
import NavBar from './componentes/navbar/NavBar';
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/itemlistcontainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './componentes/cart/Cart';
import { useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './services/firebase';
import { products } from './asyncMock';
import Checkout from './componentes/checkout/Checkout';


function App() {
  //useEffect(()=>{
  //const coleccionProductos = collection(db, 'productos')
  //products.map((item) => addDoc(coleccionProductos, item))
  //}, [])

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/:categoryId' element={<ItemListContainer/>}></Route>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkout' element={<Checkout></Checkout>}></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
