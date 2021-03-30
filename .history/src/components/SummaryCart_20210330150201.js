import React from "react";

const SummaryCart = (props) => {
  return (
    <div className="summary-cart">
      <h1 className="basket-title">Podsumowanie</h1>


      <h1 className="basket-value">
        Razem do zapłaty:{" "}
        {(props.StateData.myBasket
          .reduce((acc, array) => acc + array.price, 0) +
          parseFloat(props.StateData.DeliveryPrice)
          ).toFixed(2)}{" "}
        zł
      </h1>

      <div className="basket-items">
        {props.StateData.myBasket.map((basketItem) => {
          return (
            <li className="basket-item-summary">
              <div className="basket-item-title-summary">
                {basketItem.title}
              </div>
              <div className="basket-item-price"> {basketItem.price} zł</div>
              <div className="basket-item-index">
                {" "}
                {props.StateData.myBasket.indexOf(basketItem)}{" "}
              </div>
            </li>
          );
        })}
      </div>

      <h1 className="delivery-selection-info">Sposób wysyłki: {props.StateData.DeliveryType} ({props.StateData.DeliveryPrice} zł)</h1>


      <div>
        <div className="cart-close" onClick={props.cartBack}>
          Wróć
        </div>
      </div>
      <div className="order-proceed" onClick={props.orderAccept}>
        Akceptacja zamówienia
      </div>
    </div>
  );
};

export default SummaryCart;
