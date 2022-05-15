import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting='Hola, bienvenido a mi tienda'/>
    </div>
  );
}

export default App;
