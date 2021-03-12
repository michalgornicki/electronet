import './App.css';
import ItemList from './components/ItemList';
import Item from './components/Item';
import data from './data.json';

function App() {

  return (
    <div className="App">

    <h1 className="main-header">Electronic.pl</h1>

    <img className="bar" src="bar.jpg" alt=""/>

    <h1 className="header">Bestsellery</h1>
      
    <ItemList />

    </div>
  );
}

export default App;
