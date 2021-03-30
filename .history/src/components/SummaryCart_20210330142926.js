import React from 'react';

const SummaryCart = props => {
    return(
    
        <div className="summary-cart">

        <h1 className="basket-title">Podsumowanie</h1>

        <div className="basket-items">
              {props.StateData.myBasket
              .map(basketItem =>{
                return(
                  <li className="basket-item-summary">
                  <div className="basket-item-title-summary">{basketItem.title}</div> 
                  <div className="basket-item-price"> {basketItem.price} zł</div>
                  <div className="basket-item-index"> {props.StateData.myBasket.indexOf(basketItem)} </div>
                  </li>
              )
              }
              )}
            </div>

        <div><div className="cart-close" onClick={props.cartClose}>Wróć</div></div>
        <div className="order-proceed" onClick={props.orderSummary}>Akceptacja zamówienia</div>

        </div>

    )
}

export default SummaryCart;