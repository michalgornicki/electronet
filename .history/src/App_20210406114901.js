import React, { Component } from "react";
import "./App.css";
import {Helmet} from "react-helmet";

import ItemList from "./components/ItemList";
import ProductCart from "./components/ProductCart";
import BasketCart from "./components/BasketCart";
import SummaryCart from "./components/SummaryCart";
import DeliveryCart from "./components/DeliveryCart";
import PromotionBars from "./components/PromotionBars";
import Buttons from "./components/Buttons";
import NewsletterBar from "./components/NewsletterBar";
import BottomBar from "./components/BottomBar";
import MainBar from "./components/MainBar";
import SearchBar from "./components/SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
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
      maxPrice: 10000,
      searchInput: "",
      slideIndex: "1",
      DeliveryPrice: "",
      DeliveryType: "",
      name: "",
      street: "",
      zip: "",
      city: "",
      mail: "",
      phone: "",
    };
  }

  ChooseCategory = (event) => {
    document.getElementsByClassName("spinner")[0].style.display="block";
    setTimeout(() => { 
      event.target.id == "" || event.target.id == "all"
      ? this.setState({
          category: "memory disk accesories graphic sound laptops monitors",
        })
      : this.setState({ category: event.target.id });
    document.getElementsByClassName("spinner")[0].style.display="none";
  }, 500);
  this.setState({
    currentPage: "filtered",
  })
  };

  PriceSort = (event) => {
    this.setState({ priceSort: event.target.id });
    console.log(event.target.id);
  };

  AddToBasket = (event) => {
    this.setState({
      basketSum: this.state.myBasket
        .reduce((acc, array) => acc + array.price, 0)
        .toFixed(2),
      basketItems: this.state.basketItems + 1,
      myBasket: [
        ...this.state.myBasket,
        {
          title: event.target.parentElement.getElementsByClassName("title")[0]
            .innerHTML,
          price: parseFloat(
            event.target.parentElement.getElementsByClassName("price")[0]
              .innerHTML
          ),
          image: event.target.parentElement.getElementsByClassName(
            "item-image"
          )[0].src,
        },
      ],
    });
    console.log(this.state.basketSum);
  };

  AddToBasketCart = (event) => {
    console.log(this.state.myBasket);
    this.setState({
      basketSum: this.state.myBasket
        .reduce((acc, array) => acc + array.price, 0)
        .toFixed(2),
      basketItems: this.state.basketItems + 1,
      myBasket: [
        ...this.state.myBasket,
        {
          title: event.target.parentElement.getElementsByClassName(
            "cart-title"
          )[0].innerHTML,
          price: parseFloat(
            event.target.parentElement.getElementsByClassName("cart-price")[0]
              .innerHTML
          ),
          image: event.target.parentElement.getElementsByClassName(
            "cart-photo"
          )[0].src,
        },
      ],
    });
  };

  ClickProduct = (event) => {
    document.getElementsByClassName("product-cart")[0].style.display = "block";

    this.setState({
      selectedProduct: event.target.parentElement.getElementsByClassName(
        "title"
      )[0].innerHTML,
      selectedPrice: parseFloat(
        event.target.parentElement.getElementsByClassName("price")[0].innerHTML
      ),
      selectedAvailability: event.target.parentElement.getElementsByClassName(
        "availability"
      )[0].innerHTML,
      selectedCategory: event.target.parentElement.getElementsByClassName(
        "category"
      )[0].innerHTML,
      selectedDescription: event.target.parentElement.getElementsByClassName(
        "description"
      )[0].innerHTML,
      selectedPhoto: event.target.parentElement.getElementsByClassName(
        "item-image"
      )[0].src,
      selectedBasket: 0,
    });
  };

  cartClose = (event) => {
    event.target.parentElement.parentElement.style.display = "none";
    this.setState({
      currentPage: "home",
    });
  };

  cartBack = (event) => {
    window.scrollTo(0, 0);
    this.setState({
      currentPage: "basket",
    });
  };

  searchProduct = (event) => {
    window.scrollTo(0, 820);
    document.getElementsByClassName("min-price")[0].value = 0;
    document.getElementsByClassName("max-price")[0].value = 10000;
    this.setState({
      searchInput: document.getElementsByClassName("search-product-input")[0]
        .value,
      minPrice: 0,
      maxPrice: 10000,
    });
  };

  clickBasket = (event) => {
    window.scrollTo(0, 0);
    this.setState({
      currentPage: "basket",
    });
  };

  setMinPrice = (event) => {
    this.setState({
      minPrice: event.target.value,
    });
  };

  setMaxPrice = (event) => {
    this.setState({
      maxPrice: event.target.value,
    });
  };

  deleteItem = (event) => {
    console.log(
      event.target.parentElement.getElementsByClassName("basket-item-index")[0]
        .innerHTML
    );
    let filteredArray = this.state.myBasket;
    filteredArray.splice(
      event.target.parentElement.getElementsByClassName("basket-item-index")[0]
        .innerHTML,
      1
    );
    this.setState({
      myBasket: filteredArray,
      basketItems: this.state.basketItems - 1,
    });
  };

  showSlides = (event) => {
    setInterval(() => {
      this.setState({
        slideIndex:
          this.state.slideIndex < 5 ? parseFloat(this.state.slideIndex) + 1 : 1,
      });
      console.log(this.state.slideIndex);
    }, 4000);
  };

componentDidMount() {
  this.showSlides();
  }

  orderProceed = (event) => {
    this.state.basketItems < 1
      ? console.log("error")
      : this.setState({
          currentPage: "delivery",
        });
  };

  selectCourier = (event) => {
    this.state.myBasket
      .reduce((acc, array) => acc + array.price, 0)
      .toFixed(2) < 151
      ? this.setState({
          DeliveryType: "Kurier",
          DeliveryPrice: 15,
        })
      : this.setState({
          DeliveryType: "Kurier",
          DeliveryPrice: 0,
        });
  };

  selectInpost = (event) => {
    this.state.myBasket
      .reduce((acc, array) => acc + array.price, 0)
      .toFixed(2) < 151
      ? this.setState({
          DeliveryType: "InPost Paczkomat",
          DeliveryPrice: "10",
        })
      : this.setState({
          DeliveryType: "InPost Paczkomat",
          DeliveryPrice: 0,
        });
  };

  selectPickup = (event) => {
    this.setState({
      DeliveryType: "Odbiór własny",
      DeliveryPrice: "0",
    });
  };

  formValidation = (event) => {
    console.log(this.state.DeliveryPrice);
    const input = document.getElementsByClassName("delivery-input");
    const regulation = document.getElementById("regulation-accept");
    const error = document.getElementsByClassName("delivery-error");

    input[0].value.length < 6
      ? (error[0].innerHTML =
          "Imię i nazwisko powinno zawierać conajmniej 6 liter")
      : (error[0].innerHTML = "&#9989;");

    input[1].value.length < 6 || !input[1].value.match(".*\\d.*")
      ? (error[1].innerHTML =
          "Imię i nazwisko powinno zawierać conajmniej 6 liter")
      : (error[1].innerHTML = "&#9989;");

    input[2].value.length < 6 ||
    input[2].value.match(".*\\dst.*") ||
    !input[2].value.includes("-")
      ? (error[2].innerHTML = "Wpisz prawidłowy kod pocztowy")
      : (error[2].innerHTML = "&#9989;");

    input[3].value.length < 4
      ? (error[3].innerHTML = "Nazwa miejscowości powinna conajmniej 6 liter")
      : (error[3].innerHTML = "&#9989;");

    input[4].value.length < 4 ||
    !input[4].value.includes("@") ||
    !input[4].value.includes(".")
      ? (error[4].innerHTML = "Wpisz prawidłowy adres e-mail")
      : (error[4].innerHTML = "&#9989;");

    input[5].value.length < 9 || input[5].value.match(".*\\dst.*")
      ? (error[5].innerHTML = "Wpisz prawidłowy numer telefonu (9 cyfr)")
      : (error[5].innerHTML = "&#9989;");

    !regulation.checked
      ? (error[6].innerHTML = "Zaznacz zgodę aby dokonać zakupu.")
      : (error[6].innerHTML = "&#9989;");
  };

  orderSummary = (event) => {
    const error = document.getElementsByClassName("delivery-error");

    if (
      this.setState({
        currentPage: "summary",
      })
    ) {
      this.setState({
        currentPage: "summary",
      });
    } else {
      console.log("error");
    }
  };

  orderAccept = (event) => {
    window.scrollTo(0, 0);
    document.getElementsByClassName("basket-value-summary")[0].style.filter = "opacity(0)";
    document.getElementsByClassName("delivery-selection-info")[0].style.filter = "opacity(0)";
    document.getElementsByClassName("order-confirmation")[0].style.filter = "opacity(1)";
    document.getElementsByClassName("order-proceed")[0].style.display = "none";
    document.getElementsByClassName("cart-close")[1].innerHTML = "Kontynuuj zakupy";
    document.getElementsByClassName("cart-close")[1].style-left = "50%";
    

    this.setState({
      myBasket: [],
      basketItems: 0,
    });
  };

  oneItemRow = (event) => {
    var items = document.querySelectorAll(".item")
    for (var x = 0; x < items.length; x++)
    items[x].style.width="95%";

  }

  twoItemRow = (event) => {
    var items = document.querySelectorAll(".item")
    for (var x = 0; x < items.length; x++)
    items[x].style.width="47%";
  }

  threeItemRow = (event) => {
    var items = document.querySelectorAll(".item")
    for (var x = 0; x < items.length; x++)
    items[x].style.width="31%";
  }

  fourItemRow = (event) => {
    var items = document.querySelectorAll(".item")
    for (var x = 0; x < items.length; x++)
    items[x].style.width="23%";
  }

  fiveItemRow = (event) => {
    var items = document.querySelectorAll(".item")
    for (var x = 0; x < items.length; x++)
    items[x].style.width="18%";
  }

  sixItemRow = (event) => {
    var items = document.querySelectorAll(".item")
    for (var x = 0; x < items.length; x++)
    items[x].style.width="15%";
  }

  render() {
    return (
      <div className="App">

            <Helmet>
                <meta name="viewport" content="width=device-width, user-scalable=no"/>
                <title>Electronet - elektronika w niskiej cenie</title>
                <link rel="icon" href="meta-icon.png"/>
            </Helmet>

        <img className="spinner" src="spinner.gif" alt=""/>

        <div className="app-container" id="app-container">
        <a href="#app-container"><img className="up" src="up-arrow.png" alt=""/></a>
          <MainBar StateData={this.state} clickBasket={this.clickBasket} />
          <SearchBar searchProduct={this.searchProduct} />

          {this.state.currentPage == "home" ? (
            <PromotionBars StateData={this.state} />
          ) : (
            ""
          )}

          {this.state.currentPage == "home" || this.state.currentPage == "filtered" ? (
            <Buttons
              ChooseCategory={this.ChooseCategory}
              PriceSort={this.PriceSort}
              setMinPrice={this.setMinPrice}
              setMaxPrice={this.setMaxPrice}
              oneItemRow={this.oneItemRow}
              twoItemRow={this.twoItemRow}
              threeItemRow={this.threeItemRow}
              fourItemRow={this.fourItemRow}
              fiveItemRow={this.fiveItemRow}
              sixItemRow={this.sixItemRow}
            />
          ) : (
            ""
          )}

          {this.state.currentPage == "home" || this.state.currentPage == "filtered" ? (
            <ItemList
              StateData={this.state}
              ClickProduct={this.ClickProduct}
              AddToBasket={this.AddToBasket}
            />
          ) : (
            ""
          )}

          <ProductCart
            StateData={this.state}
            AddToBasketCart={this.AddToBasketCart}
            cartClose={this.cartClose}
          />

          {this.state.currentPage == "basket" ? (
            <BasketCart
              StateData={this.state}
              cartClose={this.cartClose}
              deleteItem={this.deleteItem}
              orderProceed={this.orderProceed}
            />
          ) : (
            ""
          )}

          {this.state.currentPage == "delivery" ? (
            <DeliveryCart
              StateData={this.state}
              cartBack={this.cartBack}
              orderSummary={this.orderSummary}
              formValidation={this.formValidation}
              selectCourier={this.selectCourier}
              selectInpost={this.selectInpost}
              selectPickup={this.selectPickup}
            />
          ) : (
            ""
          )}

          {this.state.currentPage == "summary" ? (
            <SummaryCart
              StateData={this.state}
              cartBack={this.cartBack}
              orderAccept={this.orderAccept}
            />
          ) : (
            ""
          )}

          {this.state.currentPage == "home" || this.state.currentPage == "filtered" ? (
            <NewsletterBar />
          ) : (
            ""
          )}

          
          <BottomBar />
        </div>
      </div>
    );
  }
}

export default App;
