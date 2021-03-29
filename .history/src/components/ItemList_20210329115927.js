import React from 'react';
import data from '../data';


const ItemList = () => {

    newData = data;

    return(
        <div>
        {newData.map(product =>{
            
        return(

        <div className="item" key={data.id}>
        <img className="item-image" src={product.image} alt=""/>
        <h1>{product.title}</h1>
        <h3>{product.availability}</h3>
        <h2>{product.price}</h2>
        <div className="add-to-cart"><img className="cart" src="cart.png" alt=""/>Do koszyka</div>
        </div>
    
        )})}
        </div>
        
        )}




export default ItemList;
