import React from 'react';

const SummaryCart = props => {
    return(
    
        <div className="summary-cart">

        <h1 className="basket-title">Podsumowanie</h1>

        <div><div className="cart-close" onClick={this.cartClose}>Wróć</div></div>
        <div className="order-proceed" onClick={this.orderSummary}>Potwierdzenie zamówienia</div>

        </div>

    )
}

export default SummaryCart;