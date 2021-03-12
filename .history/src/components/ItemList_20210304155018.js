import React from 'react';
import data from '../data.json';

const ItemList = () => {
    return(
        <div>
        {data.map(product =>{
        return(

        <div className="item" key={data.id}>
        <img className="item-image" src={product.image} alt=""/>
        <h1>{product.title}</h1>
        <h3>{product.availability}</h3>
        <h2>{product.price}</h2>
        <h3>{product.score}</h3>
        <img className="cart" src="cart.png" alt=""/>
        </div>

        )})}
        </div>
        
        )}




export default ItemList;
