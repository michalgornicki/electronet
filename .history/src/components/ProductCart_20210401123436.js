import React from "react";

const ProductCart = (props) => {
  return (
    <div
      className="product-cart"
      onMouseLeave={() =>
        (document.getElementsByClassName("product-cart")[0].style.display =
          "none")
      }
    >
      <h1 className="cart-title">{props.StateData.selectedProduct}</h1>
      <h1 className="cart-price">{props.StateData.selectedPrice} zł</h1>
      <h1 className="cart-availability">
        Dostępność: {props.StateData.selectedAvailability}
      </h1>
      <div className="cart-text">
        <h1 className="cart-description">
          {props.StateData.selectedDescription}
        </h1>
        <h1 className="cart-product-info">Gwarancja producenta: 24 miesiące</h1>
        <h1 className="cart-product-info">Produkt nowy</h1>
        <h1 className="cart-product-info">Waga: 500g</h1>
        <h1 className="cart-product-info">3 raty RRSO 0% </h1>
      </div>

      <img className="cart-photo" src={props.StateData.selectedPhoto} alt="" />
      <div className="add-to-cart-large" onClick={props.AddToBasketCart}>
        {" "}
        Do koszyka
      </div>
      <div>
        <div className="cart-close" onClick={props.cartClose}>
          Zamknij
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
