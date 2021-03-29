import React from 'react';
import data from '../data';


const ItemList = () => {
    
    ClickProduct = event => {
        document.getElementsByClassName("product-cart")[0].style.display="block";
    
        this.setState({
          selectedProduct: event.target.parentElement.getElementsByClassName('title')[0].innerHTML,
          selectedPrice: parseFloat(event.target.parentElement.getElementsByClassName('price')[0].innerHTML),
          selectedAvailability: event.target.parentElement.getElementsByClassName('availability')[0].innerHTML,
          selectedCategory: event.target.parentElement.getElementsByClassName('category')[0].innerHTML,
          selectedDescription: event.target.parentElement.getElementsByClassName('description')[0].innerHTML,
          selectedPhoto: event.target.parentElement.getElementsByClassName('item-image')[0].src,
          selectedBasket: 0
        })
      }

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
          <img className="item-image" src={product.image} alt="" onClick={this.ClickProduct}/>
          <h1 className="title" onClick={this.ClickProduct}>{product.title}</h1>
          <h3 className="availability">{product.availability}</h3>
          <h2 className="price">{product.price}</h2>
          <h2 className="category">{product.category}</h2>
          <h2 className="description">{product.description}</h2>
          <div className="add-to-cart" onClick={this.AddToBasket}> Do koszyka</div>
        </div>
        )})
        }
        </div>
        
        )}




export default ItemList;
