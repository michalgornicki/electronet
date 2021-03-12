import React from 'react';
import Item from './Item';
import data from './data.json';

const ItemList = () => {
    return(
        <div>
        {data.map(product =>{
        return(

        <div>
        <img className="item-image" src={Image} alt=""/>
        <h1>{data.title}</h1>
        <h2>{data.availability}</h2>
        <h3>{data.score}</h3>
        </div>

        )
        }   
        );
        }
        </div>
        
        )}




export default ItemList;
