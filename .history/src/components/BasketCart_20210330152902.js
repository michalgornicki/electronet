import React from "react";

const BasketCart = (props) => {
  return (
    <div className="basket-cart">
      {props.StateData.myBasket.length > 0 ? (
        <div>
          <h1 className="basket-title">Twój koszyk</h1>

          <h1 className="basket-value">
            Razem do zapłaty: {props.StateData.myBasket.reduce((acc, array) => acc + array.price, 0).toFixed(2)} zł
          </h1>

          <div className="basket-items">
            {props.StateData.myBasket.map((basketItem) => {
              return (
                <li className="basket-item">
                  <img className="basket-item-image" src={basketItem.image} alt="" />
                  <div className="basket-item-title">{basketItem.title}</div>
                  <div className="basket-item-price"> {basketItem.price} zł</div>
                  <div className="basket-item-index"> {props.StateData.myBasket.indexOf(basketItem)} </div>
                  <div onClick={props.deleteItem} className="deleteItem">
                    Usuń
                  </div>
                </li>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="basket-title">Twój koszyk jest pusty...</h1>
          <img className="cart-icon-large" src="box.png" alt="" />
        </div>
      )}

      <div>
        <div className="cart-close" onClick={props.cartClose}>
          Zamknij
        </div>
      </div>
      <div className="order-proceed" onClick={props.orderProceed}>
        {" "}
        Dostawa i płatność
      </div>
    </div>
  );
};

export default BasketCart;
