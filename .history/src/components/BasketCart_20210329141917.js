import React from 'react';

const BasketCart = props => {
    <div className="basket-cart">

          {this.state.myBasket.length > 0  ? 
          <div>
          <h1 className="basket-title">Twój koszyk</h1>

          <h1 className="basket-value">Razem do zapłaty: {this.state.myBasket.reduce((acc, array) => acc + array.price, 0).toFixed(2)} zł</h1>


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
          <img className="cart-icon-large" src="box.png" alt=""/>
          </div>
          }

        <div><div className="cart-close" onClick={this.cartClose}>Zamknij</div></div>
        <div className="order-proceed" onClick={this.orderProceed}> Dostawa i płatność</div>

        </div>
}

export default BasketCart;