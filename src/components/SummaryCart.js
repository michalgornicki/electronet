import React from 'react';

const SummaryCart = props => {
    return(
    
        <div className="summary-cart">

        <h1 className="basket-title">Podsumowanie</h1>

        <div><div className="cart-close" onClick={props.cartClose}>Wróć</div></div>
        <div className="order-proceed" onClick={props.orderSummary}>Potwierdzenie zamówienia</div>

        </div>

    )
}

export default SummaryCart;