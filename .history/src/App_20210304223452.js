import './App.css';
import ItemList from './components/ItemList';
import Item from './components/Item';
import data from './data.json';

function App() {

  return (
    <div className="App">

    <h1 class="main-header">Electronic.pl</h1>

    <h1 class="header">Bestsellery</h1>
      
    <ItemList />

    </div>
  );
}

export default App;
