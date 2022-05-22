import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemCount from './components/ItemCount/ItemCount.js';
import { useState } from 'react';

function App() {
  
  const [selectedAmount, setSelectedAmount] = useState( 0 );
  const onAdd = amount => setSelectedAmount( amount )

  return (
    <>
      <NavBar selectedAmount={ selectedAmount }/>
      <ItemListContainer greeting='Hola, bienvenido a mi tienda'/>
      <ItemCount stock={ 10 } initial={ 1 } onAdd={onAdd} />
    </>
  );
}

export default App;
