import React from 'react';
import data from '../data';


const ItemList = () => {
    

    return(
        <div className="items-container">
        {data
        
        .filter(element => this.state.category.includes(element.category))

        .filter(element => parseFloat(element.price) < this.state.maxPrice && parseFloat(element.price) > this.state.minPrice)
        
        .filter(element => element.title.toLowerCase().includes(this.state.searchInput))

        .sort((a, b) => {
          if (this.state.priceSort === "ascending")
          {return (parseFloat(a.price) - parseFloat(b.price));}
          else 
          {return (parseFloat(b.price) - parseFloat(a.price));}
          })

        .map(product =>{
        return(
        <div className="item" key={data.id} >
          <img className="item-image" src={product.image} alt="" onClick={product.ClickProduct}/>
          <h1 className="title" onClick={product.ClickProduct}>{product.title}</h1>
          <h3 className="availability">{product.availability}</h3>
          <h2 className="price">{product.price}</h2>
          <h2 className="category">{product.category}</h2>
          <h2 className="description">{product.description}</h2>
          <div className="add-to-cart" onClick={product.AddToBasket}> Do koszyka</div>
        </div>
        )})
        }
        </div>
        
        )}




export default ItemList;
