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
      basket: 0,
      basketItems: 0,
      selectedProduct: 0,
      selectedPrice: 0,
      selectedAvailability: 0,
      selectedCategory: 0,
      selectedDescription: 0,
      selectedPhoto: 0
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
      basket: ((this.state.basket) + parseFloat(event.target.parentElement.getElementsByClassName('price')[0].innerHTML)),
      basketItems: this.state.basketItems + 1
    });    
  }

  AddToBasketCart = event => {
    this.setState({
      basket: ((this.state.basket) + parseFloat(event.target.parentElement.parentElement.getElementsByClassName('cartPrice')[0].innerHTML)),
      basketItems: this.state.basketItems + 1
    });    
  }

  ClickProduct = event => {
    document.getElementsByClassName("product-cart")[0].style.display="block";

    this.setState({
      selectedProduct: event.target.parentElement.getElementsByClassName('title')[0].innerHTML,
      selectedPrice: parseFloat(event.target.parentElement.getElementsByClassName('price')[0].innerHTML),
      selectedAvailability: event.target.parentElement.getElementsByClassName('availability')[0].innerHTML,
      selectedCategory: event.target.parentElement.getElementsByClassName('category')[0].innerHTML,
      selectedDescription: event.target.parentElement.getElementsByClassName('description')[0].innerHTML,
      selectedPhoto: event.target.parentElement.getElementsByClassName('item-image')[0].src,
      selectedBasket: 0
    })
  }

  cartClose = event => {
    event.target.parentElement.parentElement.style.display="none";
  }

  render(){


  return (
    <div className="App" >

    <h1 className="main-header"> <div className="main-header-text">ELECTRONET</div> <div className="basket">W koszyku: ({this.state.basketItems}) {(this.state.basket).toFixed(2)} zł</div> </h1>

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
        <div className="item" key={data.id} >
          <img className="item-image" src={product.image} alt="" onClick={this.ClickProduct}/>
          <h1 className="title">{product.title}</h1>
          <h3 className="availability">{product.availability}</h3>
          <h2 className="price">{product.price}</h2>
          <h2 className="category">{product.category}</h2>
          <h2 className="description">{product.description}</h2>
          <div className="add-to-cart" onClick={this.AddToBasket}><img className="cart" src="cart.png" alt=""/>Do koszyka</div>
        </div>
        )})
        }
        </div>

        <div className="product-cart" onClick={document.getElementsByClassName("product-cart")[0].style.display="none"}>
        
        <h1 className="cartTitle">{this.state.selectedProduct}</h1>
        <h1 className="cartPrice">{this.state.selectedPrice} zł</h1>
        <h1 className="cartAvailability">Dostępność: {this.state.selectedAvailability}</h1>
        <h1 className="cartDescription">{this.state.selectedDescription}</h1>
        <img className="cartPhoto" src={this.state.selectedPhoto} alt=""/>
        <div className="cartAddToBasket" onClick={this.AddToBasketCart}><img className="cart" src="cart.png" alt=""/>Do koszyka</div>
        <div><div className="cartClose" onClick={this.cartClose}>Zamknij</div></div>

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
