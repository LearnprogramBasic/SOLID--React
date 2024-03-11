import { TablaProductos } from './components/TablaProductos/TablaProductos';
import {useProductos} from './hooks/useProductos';
import './App.css';


function App() {
  const productos = useProductos();

  return (
    <div className="App">
      <TablaProductos productos={productos} />
    </div>
  );
}

export default App;
