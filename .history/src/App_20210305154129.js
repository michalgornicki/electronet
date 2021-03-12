import './App.css';
import ItemList from './components/ItemList';
import Item from './components/Item';
import data from './data.json';

function App() {

  return (
    <div className="App">

    <h1 className="main-header"> <div className="main-header-text">ELECTRONET</div></h1>

    <div className="bar" alt=""> <div className="bar-text"> <div>darmowa dostawa od 150 zł</div> <div>raty 10 x 0%</div> <div>zakupy dostępne od ręki</div></div> </div>


    <div className="button-bar">
    <button className="button">Pamięć</button>
    <button className="button">Peryferia</button>
    <button className="button">Karty graficzne</button>
    <button className="button">Dźwięk</button>
    <button className="button">Laptopy</button>
    <button className="button">Monitory</button>
    </div>

    <h1 className="header">Polecamy</h1>


    <ItemList />

    </div>
  );
}

export default App;
