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
      category: "memory disk accesories graphic sound laptops monitors",
      priceSort: "ascending",
      basket: 0
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

  AddToBasket = event => {
    this.setState({
      basket: ((this.state.basket) + parseInt(event.target.parentElement.getElementsByClassName('price')[0].innerHTML))
    });
    console.log((this.state.basket).toFixed(2));
  }

  

  render(){


  return (
    <div className="App">

    <h1 className="main-header"> <div className="main-header-text">ELECTRONET</div> <div className="basket">W koszyku: {(this.state.basket).toFixed(2)} zł</div> </h1>

    <div className="bar" alt=""> <div className="bar-text"> <div className="bar-text-1">darmowa dostawa od 150 zł</div> <div className="bar-text-2">raty 10 x 0%</div> <div className="bar-text-3">zakupy dostępne od ręki</div></div> </div>


    <div className="button-bar">
    <button id="all" className="button" onClick={() => this.setState({category: "memory disk accesories graphic sound laptops monitors"})}>Wszystkie</button>
    <button id="memory" className="button" onClick={this.ChooseCategory}>Pamięć</button>
    <button id="disk" className="button" onClick={this.ChooseCategory}>Dyski</button>
    <button id="accesories" className="button" onClick={this.ChooseCategory}>Peryferia</button>
    <button id="graphic" className="button" onClick={this.ChooseCategory}>Karty graficzne</button>
    <button id="sound" className="button" onClick={this.ChooseCategory}>Dźwięk</button>
    <button id="laptops" className="button" onClick={this.ChooseCategory}>Laptopy</button>
    <button id="monitors" className="button" onClick={this.ChooseCategory}>Monitory</button>
    </div>

    <button id="ascending" className="button" onClick={this.PriceSort}>Od najtańszego &#8593;</button>
    <button id="descending" className="button" onClick={this.PriceSort}>Od najdroższego &#8595;</button>

    <h1 className="header">Polecamy</h1>


    <div>
        {data
        
        .filter(element => this.state.category.includes(element.category))

        .sort((a, b) => {
          if (this.state.priceSort === "ascending")
          {return (parseFloat(a.price) - parseFloat(b.price));}
          else 
          {return (parseFloat(b.price) - parseFloat(a.price));}
          })

        .map(product =>{
        return(
        <div className="item" key={data.id}>
          <img className="item-image" src={product.image} alt=""/>
          <h1>{product.title}</h1>
          <h3>{product.availability}</h3>
          <h2 className="price">{product.price}</h2>
          <div className="add-to-cart" onClick={this.AddToBasket}><img className="cart" src="cart.png" alt=""/>Do koszyka</div>
        </div>
        )})
        }
        </div>

        <div className="bottom-container">
        <div className="bottom-container-text">
        <div>Kontakt:</div>
        <div>662-047-277</div>
        <div>electronet@electronet.pl</div>
        </div>
        </div>

    </div>
  );
  }
}

export default App;
