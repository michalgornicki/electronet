import React from 'react';
import data from '../data';

const ProductCart = props => {
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
          <div className="add-to-cart-large" onClick={this.AddToBasketCart}> Do koszyka</div>
          <div><div className="cart-close" onClick={this.cartClose}>Zamknij</div></div>

        </div>
}

export default ProductCart;