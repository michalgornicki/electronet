import React from 'react';

const MainBar = props => {

    return(
    
        <h1 className="main-header">
            <a href="index.html">
              <div className="main-header-text">ELECTRONET</div>
            </a>

            <div className="header-cart" onClick={props.clickBasket}>
              <img className="cart-icon-medium" src="cart.png" alt="" /> (
              {props.StateData.basketItems}){" "}
              {props.StateData.myBasket
                .reduce((acc, array) => acc + array.price, 0)
                .toFixed(2)}{" "}
              zł
            </div>
          </h1>
    
    )
}

export default MainBar;