import NavBar from './components/NavBar/NavBar.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={< ItemListContainer greeting='Todos los productos'/>} />
        <Route path='/itemDetail/:itemId' element={<ItemDetailContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos seleccionados' />}/>
        <Route path='/category/:categoryId/itemDetail/:itemId' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
