import './App.css';
import ItemList from './components/ItemList';
import Item from './components/Item';
import data from './data.json';

function App() {

  return (
    <div className="App">

    <h1>Bestsellery</h1>
      
    <ItemList />

    </div>
  );
}

export default App;
