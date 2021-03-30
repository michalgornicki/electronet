import React from "react";
import data from "../data";

const ItemList = (props) => {
  return (
    <div className="items-container">
      <h1 className="header">Polecamy</h1>

      {data

        .filter((element) => props.StateData.category.includes(element.category))

        .filter(
          (element) =>
            parseFloat(element.price) < props.StateData.maxPrice && parseFloat(element.price) > props.StateData.minPrice
        )

        .filter((element) => element.title.toLowerCase().includes(props.StateData.searchInput))

        .sort((a, b) => {
          if (props.StateData.priceSort === "ascending") {
            return parseFloat(a.price) - parseFloat(b.price);
          } else {
            return parseFloat(b.price) - parseFloat(a.price);
          }
        })

        .map((product) => {
          return (
            <div className="item" key={data.id}>
              <img className="item-image" src={product.image} alt="" onClick={props.ClickProduct} />
              <h1 className="title" onClick={props.ClickProduct}>
                {product.title}
              </h1>
              <h3 className="availability">{product.availability}</h3>
              <h2 className="price">{product.price}</h2>
              <h2 className="category">{product.category}</h2>
              <h2 className="description">{product.description}</h2>
              <div className="add-to-cart" onClick={props.AddToBasket}>
                {" "}
                Do koszyka
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ItemList;
