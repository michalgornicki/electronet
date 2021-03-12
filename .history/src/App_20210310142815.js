import './App.css';
import ItemList from './components/ItemList';
import Item from './components/Item';
import data from './data.json';

function App() {

  function filterMemory() {
    var result = data.filter(element => element.category === "memory");
    console.log(result);
  }

  return (
    <div className="App">

    <h1 className="main-header"> <div className="main-header-text">ELECTRONET</div></h1>

    <div className="bar" alt=""> <div className="bar-text"> <div className="bar-text-1">darmowa dostawa od 150 zł</div> <div className="bar-text-2">raty 10 x 0%</div> <div className="bar-text-3">zakupy dostępne od ręki</div></div> </div>


    <div className="button-bar">
    <button className="button" onClick={filterMemory}>Pamięć</button>
    <button className="button">Peryferia</button>
    <button className="button">Karty graficzne</button>
    <button className="button">Dźwięk</button>
    <button className="button">Laptopy</button>
    <button className="button">Monitory</button>
    </div>

    <h1 className="header">Polecamy</h1>


    const ItemList = (newData) => {

newData = data;

return(
    <div>
    {newData.map(product =>{
        
    return(

    <div className="item" key={data.id}>
    <img className="item-image" src={product.image} alt=""/>
    <h1>{product.title}</h1>
    <h3>{product.availability}</h3>
    <h2>{product.price}</h2>
    <div className="add-to-cart"><img className="cart" src="cart.png" alt=""/>Do koszyka</div>
    </div>

    )})}
    </div>
    
    )}

    </div>
  );
}

export default App;
