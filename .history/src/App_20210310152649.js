import './App.css';
import ItemList from './components/ItemList';
import Item from './components/Item';
import data from './data.json';
import { render } from '@testing-library/react';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "memory"
    };
  }

  ChooseCategory = event => {
    this.setState({ searchfield: event.target.value });
  };

  render(){

    function filterMemory() {
      var result = data.filter(element => element.category === "memory");
      console.log(result);
    }

  return (
    <div className="App">

    <h1 className="main-header"> <div className="main-header-text">ELECTRONET</div></h1>

    <div className="bar" alt=""> <div className="bar-text"> <div className="bar-text-1">darmowa dostawa od 150 zł</div> <div className="bar-text-2">raty 10 x 0%</div> <div className="bar-text-3">zakupy dostępne od ręki</div></div> </div>


    <div className="button-bar">
    <button id="memory" className="button" onClick={this.ChooseCategory}>Pamięć</button>
    <button id="accesories" className="button">Peryferia</button>
    <button id="graphic" className="button">Karty graficzne</button>
    <button id="sound" className="button">Dźwięk</button>
    <button id="laptops" className="button">Laptopy</button>
    <button id="monitors" className="button">Monitory</button>
    </div>

    <h1 className="header">Polecamy</h1>


    <ItemList />

    </div>
  );
  }
}

export default App;
