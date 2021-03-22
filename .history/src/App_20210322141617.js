import './App.css';
import data from './data.json';
import ItemList from './components/ItemList';
import Item from './components/Item';
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
      selectedPhoto: 0,
      showBars: true,
      myBasket: [],
      minPrice: 0,
      maxPrice: 3000,
      searchInput: "",
      slideIndex: "1",
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
      basketSum: this.state.myBasket.reduce((acc, array) => acc + array.price, 0).toFixed(2),
      basketItems: this.state.basketItems + 1,
      myBasket: [...this.state.myBasket, {
        title: event.target.parentElement.getElementsByClassName('title')[0].innerHTML, 
        price: parseFloat(event.target.parentElement.getElementsByClassName('price')[0].innerHTML),
        image: event.target.parentElement.getElementsByClassName('item-image')[0].src,
      }]
    });  
    console.log(this.state.basketSum) 
  }

  AddToBasketCart = event => {
    console.log(this.state.myBasket)
    this.setState({
      basketSum: this.state.myBasket.reduce((acc, array) => acc + array.price, 0).toFixed(2),
      basketItems: this.state.basketItems + 1,
      myBasket: [...this.state.myBasket, {
        title: event.target.parentElement.getElementsByClassName('cartTitle')[0].innerHTML, 
        price: parseFloat(event.target.parentElement.getElementsByClassName('cartPrice')[0].innerHTML),
        image: event.target.parentElement.getElementsByClassName('cartPhoto')[0].src,
      }]
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

  searchProduct = event => {
    document.getElementsByClassName("min-price")[0].value = 0;  
    document.getElementsByClassName("max-price")[0].value = 3000;  
    this.setState({
      showBars: false,
      searchInput: document.getElementsByClassName("search-product-input")[0].value,
      minPrice: 0,
      maxPrice: 3000,
    });
  }

  clickBasket = event => {
    document.getElementsByClassName("my-basket-cart")[0].style.display="block";
  }

  setMinPrice = event => {
    this.setState({
      minPrice: event.target.value,
    })
  }

  setMaxPrice = event => {
    this.setState({
      maxPrice: event.target.value,
    })
  }

  deleteItem = event => {
    console.log(event.target.parentElement.getElementsByClassName("basket-item-index")[0].innerHTML)
    let filteredArray = this.state.myBasket;
    filteredArray.splice(event.target.parentElement.getElementsByClassName("basket-item-index")[0].innerHTML, 1);
    this.setState({
      myBasket: filteredArray,
      basketItems: this.state.basketItems - 1,
    })
  }

  showSlides = event => {
    setInterval(() => {
      this.setState({
        slideIndex: this.state.slideIndex < 5 ? parseFloat(this.state.slideIndex) + 1 : 1,
      })
      console.log(this.state.slideIndex)
    }, 4000);
    
  }

  componentDidMount(){
    this.showSlides();
  }


  render(){

  return (
    <div className="App" >

    <h1 className="main-header"> 
    <a href="index.html"><div className="main-header-text">ELECTRONET</div></a> 
    <form className="search-product" action=""> 
    <input className="search-product-input" type="text" placeholder="Znajdź produkt" onChange={console.log("aaa")}/>
    <div className="search-product-button" type="submit" onClick={this.searchProduct}>SZUKAJ</div>
    </form> 
    <div className="header-cart" onClick={this.clickBasket}>
    <img className="cart-icon-medium" src="cart.png" alt=""/> ({this.state.basketItems}) {this.state.myBasket.reduce((acc, array) => acc + array.price, 0).toFixed(2)}  zł
    </div> 
    </h1>

    <div className="bar slide slide-1" alt="" style={{opacity: this.state.slideIndex == 1 ? "1" : "0"}}> 
      <div className="bar-text"> 
        <div className="bar-text-1">darmowa dostawa od 150 zł</div> 
        <div className="bar-text-2">raty 10 x 0%</div> 
        <div className="bar-text-3">zakupy dostępne od ręki</div>
      </div> 
    </div>

    <div className="bar slide slide-2" alt="" style={{opacity: this.state.slideIndex == 2 ? "1" : "0"}}> 
      <div className="bar-text"> 
        <div className="bar-text-1">Najlepsze akcesoria gamingowe</div> 
      </div> 
    </div>

    <div className="bar slide slide-3" alt="" style={{opacity: this.state.slideIndex == 3 ? "1" : "0"}}> 
      <div className="bar-text"> 
        <div className="bar-text-1">Klawiatury do pracy zdalnej</div> 
      </div> 
    </div>

    <div className="bar slide slide-4" alt="" style={{opacity: this.state.slideIndex == 4 ? "1" : "0"}}> 
      <div className="bar-text"> 
        <div className="bar-text-1">Profesjonalne drony już od 999 zł</div> 
      </div> 
    </div>

    <div className="bar slide slide-5" alt="" style={{opacity: this.state.slideIndex == 5 ? "1" : "0"}}> 
      <div className="bar-text"> 
        <div className="bar-text-1">Zapisz się na newsletter i zgarnij rabat 10%</div> 
      </div> 
    </div>

    <div className="bar-double" style={{display: this.state.showBars ? "block" : "none"}}>
    <div className="bar-small bar-small-1" alt=""> <div className="bar-text bar-text-small">Tanie laptopy do pracy i nauki </div> </div>
    <div className="bar-small bar-small-2" alt=""> <div className="bar-text bar-text-small">Karty graficzne Nvidia i Radeon - rabaty do 20% </div> </div>
    </div>

    <div className="button-bar">
    <button id="all" className="button" onClick={() => this.setState({category: "memory disk accesories graphic sound laptops monitors"})}>Wszystko</button>
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

    <div className="price-filter">

      <input className="min-price" placeholder="0" type="text" onChange={this.setMinPrice} 
      onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}/>

      <input className="max-price" placeholder="3000" type="text" onChange={this.setMaxPrice}
      onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}/>
      
    </div>

    <h1 className="header">Polecamy</h1>


    <div>
        {data
        
        .filter(element => this.state.category.includes(element.category))

        .filter(element => parseFloat(element.price) < this.state.maxPrice && parseFloat(element.price) > this.state.minPrice)
        
        .filter(element => element.title.toLowerCase().includes(this.state.searchInput))

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
          <h1 className="title" onClick={this.ClickProduct}>{product.title}</h1>
          <h3 className="availability">{product.availability}</h3>
          <h2 className="price">{product.price}</h2>
          <h2 className="category">{product.category}</h2>
          <h2 className="description">{product.description}</h2>
          <div className="add-to-cart" onClick={this.AddToBasket}><img className="cart" src="cart.png" alt=""/> Do koszyka</div>
        </div>
        )})
        }
        </div>

        <div className="product-cart" onMouseLeave={() => document.getElementsByClassName("product-cart")[0].style.display="none"}>
        
          <h1 className="cartTitle">{this.state.selectedProduct}</h1>
          <h1 className="cartPrice">{this.state.selectedPrice} zł</h1>
          <h1 className="cartAvailability">Dostępność: {this.state.selectedAvailability}</h1>
          <h1 className="cartDescription">{this.state.selectedDescription}</h1>
          <img className="cartPhoto" src={this.state.selectedPhoto} alt=""/>
          <div className="cartAddToBasket" onClick={this.AddToBasketCart}><img className="cart" src="cart.png" alt=""/> Do koszyka</div>
          <div><div className="cartClose" onClick={this.cartClose}>Zamknij</div></div>

        </div>

        <div className="my-basket-cart">

          {this.state.myBasket.length > 0  ? 
          <div>
          <h1 className="basket-title">Twój koszyk</h1>
            <div className="basket-items">
              {this.state.myBasket
              .map(basketItem =>{
                return(
                  <li className="basket-item">
                  <img className="basket-item-image" src={basketItem.image} alt=""/>
                  <div className="basket-item-title">{basketItem.title}</div> 
                  <div className="basket-item-price"> {basketItem.price} zł</div>
                  <div className="basket-item-index"> {this.state.myBasket.indexOf(basketItem)} </div>
                  <div onClick={this.deleteItem} className="deleteItem">Usuń</div>
                  </li>

              )
              }
              )}
            </div>
            </div>

          :
          <div>
          <h1 className="basket-title">Twój koszyk jest pusty...</h1>
          <img className="cart-icon-large" src="cart-large.png" alt=""/>
          </div>
          }

          

        <div><div className="cartClose" onClick={this.cartClose}>Zamknij</div></div>
        <div className="order-proceed" onClick={this.AddToBasketCart}> Dostawa i płatność</div>

        </div>

        <div className="bar-large" alt=""> 
          <div className="bar-text"> 
            <div className="bar-text-1">Zapisz się na Newsletter</div> 
            <div className="bar-text-2">Odbierz 10% rabatu na trzy pierwsze produkty</div> 
            <div className="bar-text-3">zakupy dostępne od ręki</div>
          </div> 
      </div>

        <div className="bottom-container">
        <div className="bottom-container-text">
        <h1>Kontakt</h1>
        <h1>662-047-277</h1>
        <h1>electronet@electronet.pl</h1>
        </div>
        </div>

    </div>
  );
  }
}

export default App;

