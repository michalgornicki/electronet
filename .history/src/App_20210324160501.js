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
      basketItems: 0,
      basketSum: 0,
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
      selectedDelivery: "",
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
        title: event.target.parentElement.getElementsByClassName('cart-title')[0].innerHTML, 
        price: parseFloat(event.target.parentElement.getElementsByClassName('cart-price')[0].innerHTML),
        image: event.target.parentElement.getElementsByClassName('cart-photo')[0].src,
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

  orderProceed = event => {
    this.state.basketItems < 1 ?
    console.log("error")
    :
    document.getElementsByClassName("delivery-cart")[0].style.display="block";
  }

  selectCourier = event => {
    this.state.myBasket.reduce((acc, array) => acc + array.price, 0).toFixed(2) < 151 ?
    this.setState({
      selectedDelivery: 15
    })

    : 

    this.setState({
      selectedDelivery: 0
    })
    
  }

    selectInpost = event => {
      this.state.myBasket.reduce((acc, array) => acc + array.price, 0).toFixed(2) < 151 ?
    this.setState({
      selectedDelivery: "10"
    })

    : 

    this.setState({
      selectedDelivery: 0
    })
    }

    selectPickup = event => {
        this.setState({
          selectedDelivery: "0"
        })
  }

formValidation = event => {
  console.log(this.state.selectedDelivery)
  const input = document.getElementsByClassName("delivery-input")
  const regulation = document.getElementById("regulation-accept")
  const error = document.getElementsByClassName("delivery-error")

  input[0].value.length < 6 ?
  error[0].innerHTML="Imię i nazwisko powinno zawierać conajmniej 6 liter"
  : 
  error[0].innerHTML="&#9989;";
  

  input[1].value.length < 6 || !(input[1].value.match(".*\\d.*")) ?
  error[1].innerHTML="Imię i nazwisko powinno zawierać conajmniej 6 liter"
  : error[1].innerHTML="&#9989;";

  input[2].value.length < 6 || input[2].value.match(".*\\dst.*") || !(input[2].value.includes("-")) ?
  error[2].innerHTML="Wpisz prawidłowy kod pocztowy"
  : 
  error[2].innerHTML="&#9989;";


  input[3].value.length < 4 ?
  error[3].innerHTML="Nazwa miejscowości powinna conajmniej 6 liter"
  : error[3].innerHTML="&#9989;";

  input[4].value.length < 4  || !(input[4].value.includes("@")) || !(input[4].value.includes(".")) ?
  error[4].innerHTML="Wpisz prawidłowy adres e-mail"
  : error[4].innerHTML="&#9989;";

  input[5].value.length < 9 || input[5].value.match(".*\\dst.*") ?
  error[5].innerHTML="Wpisz prawidłowy numer telefonu (9 cyfr)"
  : error[5].innerHTML="&#9989;";

  !(regulation.checked) ?
  error[6].innerHTML="Zaznacz zgodę aby dokonać zakupu."
  : error[6].innerHTML="&#9989;";

}

orderSummary = event => {
  const input = document.getElementsByClassName("delivery-input")
  const regulation = document.getElementById("regulation-accept")
  const error = document.getElementsByClassName("delivery-error")

  if (
    error[0].innerHTML.length == 1 &&
    error[1].innerHTML.length == 1 &&
    error[2].innerHTML.length == 1 &&
    error[3].innerHTML.length == 1 &&
    error[4].innerHTML.length == 1 &&
    error[5].innerHTML.length == 1 &&
    error[6].innerHTML.length == 1 
    )
  {document.getElementsByClassName("summary-cart")[0].style.display="block";}
  else 
  {console.log("error")}
}


  render(){

  return (
    <div className="App" >

    <h1 className="main-header"> 
    <a href="index.html"><div className="main-header-text">ELECTRONET</div></a> 
    
    <div className="header-cart" onClick={this.clickBasket}>
    <img className="cart-icon-medium" src="cart.png" alt=""/> ({this.state.basketItems}) {this.state.myBasket.reduce((acc, array) => acc + array.price, 0).toFixed(2)}  zł
    </div> 
    </h1>

    <form className="search-product" action=""> 
    <input className="search-product-input" type="text" placeholder="Czego szukasz?" onChange={console.log("aaa")}/>
    <div className="search-product-button" type="submit" onClick={this.searchProduct}>SZUKAJ</div>
    </form>

    <div className="bar-container">

    <div className="bar-slider">
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

    <div className="bar-selector-container">
    <div className="bar-selector" style={{color: this.state.slideIndex == 1 ? "white" : "gray"}}>___</div>
    <div className="bar-selector" style={{color: this.state.slideIndex == 2 ? "white" : "gray"}}>___</div>
    <div className="bar-selector" style={{color: this.state.slideIndex == 3 ? "white" : "gray"}}>___</div>
    <div className="bar-selector" style={{color: this.state.slideIndex == 4 ? "white" : "gray"}}>___</div>
    <div className="bar-selector" style={{color: this.state.slideIndex == 5 ? "white" : "gray"}}>___</div>
    </div>

    </div>

    <div className="bar-double" style={{display: this.state.showBars ? "block" : "none"}}>
    <div className="bar-small bar-small-1" alt=""> <div className="bar-text bar-text-small">Tanie laptopy do pracy i nauki </div> </div>
    <div className="bar-small bar-small-2" alt=""> <div className="bar-text bar-text-small">Karty graficzne Nvidia i Radeon - rabaty do 20% </div> </div>
    </div>

    </div>

    <div className="button-bar">
    <button id="all" className="button-category" onClick={() => this.setState({category: "memory disk accesories graphic sound laptops monitors"})}>Wszystko <img class="category-icon" src="all.png" alt=""/></button>
    <button id="memory" className="button-category" onClick={this.ChooseCategory}>Pamięć <img class="category-icon" src="ram.png" alt=""/></button>
    <button id="disk" className="button-category" onClick={this.ChooseCategory}>Dyski <img class="category-icon" src="hard-disk.png" alt=""/></button>
    <button id="accesories" className="button-category" onClick={this.ChooseCategory}>Peryferia <img class="category-icon" src="keyboard.png" alt=""/></button>
    <button id="graphic" className="button-category" onClick={this.ChooseCategory}>Karty graficzne <img class="category-icon" src="graphics-card.png" alt=""/></button>
    <button id="sound" className="button-category" onClick={this.ChooseCategory}>Dźwięk <img class="category-icon" src="speaker.png" alt=""/></button>
    <button id="laptops" className="button-category" onClick={this.ChooseCategory}>Laptopy <img class="category-icon" src="laptop.png" alt=""/></button>
    <button id="monitors" className="button-category" onClick={this.ChooseCategory}>Monitory <img class="category-icon" src="lcd.png" alt=""/></button>
    </div>

    <div className="button-bar">
    <button id="ascending" className="button-price-sort" onClick={this.PriceSort}>Od najtańszego &#8593;</button>
    <button id="descending" className="button-price-sort" onClick={this.PriceSort}>Od najdroższego &#8595;</button>
    
    <div className="price-filter">

      <input className="min-price" placeholder="0" type="text" onChange={this.setMinPrice} 
      onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}/>

      <input className="max-price" placeholder="3000" type="text" onChange={this.setMaxPrice}
      onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}/>
      
    </div>
    </div>

    <h1 className="header">Polecamy</h1>


    <div className="items-display">
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
        
          <h1 className="cart-title">{this.state.selectedProduct}</h1>
          <h1 className="cart-price">{this.state.selectedPrice} zł</h1>
          <h1 className="cart-availability">Dostępność: {this.state.selectedAvailability}</h1>
          <div className="cart-text">
          <h1 className="cart-description">{this.state.selectedDescription}</h1>
          <h1 className="cart-product-info">Gwarancja producenta: 24 miesiące</h1>
          <h1 className="cart-product-info">Produkt nowy</h1>
          <h1 className="cart-product-info">Waga: 500g</h1>
          <h1 className="cart-product-info">3 raty RRSO 0% </h1>
          </div>

          <img className="cart-photo" src={this.state.selectedPhoto} alt=""/>
          <div className="add-to-cart-large" onClick={this.AddToBasketCart}><img className="cart" src="cart.png" alt=""/> Do koszyka</div>
          <div><div className="cart-close" onClick={this.cartClose}>Zamknij</div></div>

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
          <img className="cart-icon-large" src="cart.png" alt=""/>
          </div>
          }

        <div><div className="cart-close" onClick={this.cartClose}>Zamknij</div></div>
        <div className="order-proceed" onClick={this.orderProceed}> Dostawa i płatność</div>

        </div>

      <div className="delivery-cart">

        <div className="delivery-content">

        <h1 className="basket-title">Dostawa i płatność</h1>

        <h1 className="basket-value">Wartość koszyka: {this.state.myBasket.reduce((acc, array) => acc + array.price, 0).toFixed(2)} zł</h1>


        <h1 className="delivery-title">1. Sposób dostawy</h1>
        
        <div className="delivery">
        <h1><div className="delivery-type"><input type="radio" name="delivery" onClick={this.selectCourier}/> Kurier - InPost, UPS lub FedEx - 14.99 zł</div></h1>
        <h1><div className="delivery-type"><input type="radio" name="delivery" onClick={this.selectInpost}/> Paczkomat inPost 24/7 9.99 zł</div></h1>
        <h1><div className="delivery-type"><input type="radio" name="delivery" onClick={this.selectPickup}/> Odbiór osobisty w salonie Electronet - 0 zł</div></h1>
        </div>

        <h1 className="delivery-title">2. Metoda płatności</h1>

        <div className="delivery">
        <h1><div className="delivery-type"><input type="radio" name="payment"/> Blik</div></h1>
        <h1><div className="delivery-type"><input type="radio" name="payment"/> Karta płatnicza online</div></h1>
        <h1><div className="delivery-type"><input type="radio" name="payment"/> Przelew gotówkowy</div></h1>
        <h1><div className="delivery-type"><input type="radio" name="payment"/> Szybki przelew DotPay</div></h1>
        <h1><div className="delivery-type"><input type="radio" name="payment"/> Przy odbiorze</div></h1>
        </div>

        <h1 className="delivery-title">3. Dane odbiorcy</h1>

        <div className="delivery">
        <h1 className="delivery-form"><form action=""><input className="delivery-input" onChange={this.formValidation} type="aaa" placeholder="Imię i nazwisko"/><span className="delivery-error"></span></form> </h1> 
        <h1 className="delivery-form"><form action=""><input className="delivery-input" onChange={this.formValidation} type="aaa" placeholder="Ulica i numer"/><span className="delivery-error"></span></form></h1>
        <h1 className="delivery-form"><form action=""><input className="delivery-input" onChange={this.formValidation} maxLength="6" type="aaa" placeholder="Kod pocztowy"/><span className="delivery-error"></span></form></h1>
        <h1 className="delivery-form"><form action=""><input className="delivery-input" onChange={this.formValidation} type="aaa" placeholder="Miejscowość"/><span className="delivery-error"></span></form></h1>
        <h1 className="delivery-form"><form action=""><input className="delivery-input" onChange={this.formValidation} type="aaa" placeholder="E-mail"/><span className="delivery-error"></span></form></h1>
        <h1 className="delivery-form"><form action=""><input className="delivery-input" onChange={this.formValidation} maxLength="9" type="aaa" placeholder="Telefon"/><span className="delivery-error"></span></form></h1>
        </div>

        <h1 className="delivery-title ">Zgody formalne</h1>

        <h1 className="delivery-agree"><input type="checkbox" name="" id="regulation-accept" onChange={this.formValidation}/> Akceptuję regulamin sklepu. * <span className="delivery-error"></span></h1>
        <h1 className="delivery-agree"><input type="checkbox" name="" id=""/> Chcę otrzymywać newsletter na podany adres e-mail. **</h1>
        <h5 className="delivery-agree"> * Akceptacja regulaminu sklepu jest konieczna do dokonania zakupów.</h5>
        <h5 className="delivery-agree"> ** Newsletter jest dobrowolny - zapisz się aby uzyskać 10% rabat na 3 pierwsze zakupy.</h5>

          

        <div className="cart-close" onClick={this.cartClose}>Wróć</div>
        <div className="order-proceed" onClick={this.orderSummary}>Podsumowanie</div>

        </div>
        </div>

        <div className="bar-large" alt=""> 
          <div className="bar-text bar-text-large"> 
            <div className="bar-text-1">Zapisz się na Newsletter</div> 
            <div className="bar-text-2 bar-text-2-large">i odbierz 10% rabatu </div> 
            <div className="bar-text-3">na trzy pierwsze produkty</div>
            <form className="newsletter-form" action=""><input className="newsletter-input" type="text" placeholder="wpisz swój adres e-mail"/><button className="newsletter-button">Zapisz się</button></form>
          </div>

      </div>

        <div className="bottom-container">
        <div className="bottom-container-text">
        <h1>Kontakt</h1>
        <h1>662-047-277</h1>
        <h1>electronet@electronet.pl</h1>
        <h1>Regulamin sklepu</h1>
        <h1>Wysyłka i zwrot</h1>
        </div>
        </div>

    </div>
  );
  }
}

export default App;

