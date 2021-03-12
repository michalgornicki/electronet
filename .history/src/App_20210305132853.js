import './App.css';
import ItemList from './components/ItemList';
import Item from './components/Item';
import data from './data.json';

function App() {

  return (
    <div className="App">

    <h1 className="main-header"> <div className="main-header-text">ELECTRONET</div></h1>

    <div className="bar" alt="">DARMOWA DOSTAWA OD 150 ZŁ <br></br> RATY 20 x 0%</div>

    <h1 className="header">Polecamy</h1>
      
    <ItemList />

    </div>
  );
}

export default App;
