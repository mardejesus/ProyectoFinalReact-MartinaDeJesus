import React from 'react';
import './App.css';
import NavBar from './componentes/navbar/NavBar';
import CartWidget from './componentes/cartwidget/CartWidget';
import ItemListContainer from './componentes/itemlistcontainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Tienda oficial del merchandising de FLA'}></ItemListContainer>
    </div>
  );
}

export default App;
