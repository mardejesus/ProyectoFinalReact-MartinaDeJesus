import React from 'react';
import './App.css';
import NavBar from './componentes/navbar/NavBar';
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Tienda oficial del merchandising de FLA'}></ItemListContainer>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
