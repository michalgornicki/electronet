import React from 'react';

const SearchBar = props => {

    return(
    
        <h1 className="main-header">
            <a href="index.html">
              <div className="main-header-text">ELECTRONET</div>
            </a>

            <div className="header-cart" onClick={this.clickBasket}>
              <img className="cart-icon-medium" src="cart.png" alt="" /> (
              {this.state.basketItems}){" "}
              {this.state.myBasket
                .reduce((acc, array) => acc + array.price, 0)
                .toFixed(2)}{" "}
              zł
            </div>
          </h1>
    
    )
}

export default SearchBar;




<form className="search-product" action="">
            <input
              className="search-product-input"
              type="text"
              placeholder="Czego szukasz?"
              onChange={console.log("aaa")}
            />
            <div
              className="search-product-button"
              type="submit"
              onClick={this.searchProduct}
            >
              SZUKAJ
            </div>
          </form>