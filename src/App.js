import NavBar from './components/NavBar/NavBar.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './components/Context/CartContext.js';
import CartList from './components/CartList/CartList.js';
import Form from './components/Form/Form.js';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={< ItemListContainer greeting='Todos los productos'/>} />
          <Route path='/itemDetail/:itemId' element={<ItemDetailContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos seleccionados' />}/>
          <Route path='/category/:categoryId/itemDetail/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartList />} />
          <Route path='/checkout' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
