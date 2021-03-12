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
      category: "",
      priceSort: "ascending"
    };
  }

  ChooseCategory = event => {
    this.setState({ category: event.target.id });
    console.log(event.target.id);
  };

  PriceSort = event => {
    this.setState({ priceSort: event.target.id });
    console.log(event.target.id);
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
    <button id="disk" className="button" onClick={this.ChooseCategory}>Dyski</button>
    <button id="accesories" className="button" onClick={this.ChooseCategory}>Peryferia</button>
    <button id="graphic" className="button" onClick={this.ChooseCategory}>Karty graficzne</button>
    <button id="sound" className="button" onClick={this.ChooseCategory}>Dźwięk</button>
    <button id="laptops" className="button" onClick={this.ChooseCategory}>Laptopy</button>
    <button id="monitors" className="button" onClick={this.ChooseCategory}>Monitory</button>
    </div>

    <button id="ascending" className="button" onClick={this.PriceSort}>Od najtańszego</button>
    <button id="descending" className="button" onClick={this.PriceSort}>Od najdroższego</button>

    <h1 className="header">Polecamy</h1>


    <div>
        {data
        .sort((a, b) => {
        if (this.state.category === "memory")
        {return (b.price - a.price)}
        else 
        {return (a.price - b.price)}
        })

        .filter(element => element.category === this.state.category)
        
        .map(product =>{
    
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

    </div>
  );
  }
}

export default App;
