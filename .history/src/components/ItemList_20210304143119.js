import React from 'react';
import Item from './Item';
import data from './data.json';

const ItemList = () => {
    return(
        {data.map(product =>{
        return(

        <div>
        <img className="item-image" src={Image} alt=""/>
        <h1>{data.title}</h1>
        <h2>{data.availability}</h2>
        <h3>{data.title}</h3>
        </div>

        )
        }   
        );

        })}




export default ItemList;
