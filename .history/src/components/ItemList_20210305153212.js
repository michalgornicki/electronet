import React from 'react';
import data from '../data.json';

const ItemList = () => {
    return(
        <div>
        {data.map(product =>{
        if (product.category="memory") {
            
        
        return(

        <div className="item" key={data.id}>
        <img className="item-image" src={product.image} alt=""/>
        <h1>{product.title}</h1>
        <h3>{product.availability}</h3>
        <h2>{product.price}</h2>
        <div class="add-to-cart"><img className="cart" src="cart.png" alt=""/>Do koszyka</div>
        </div>

        )}
        else {}
        
        })}
        </div>
        
        )}




export default ItemList;
