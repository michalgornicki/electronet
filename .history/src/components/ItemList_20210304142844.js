import React from 'react';
import Item from './Item';
import data from './data.json';

const ItemList = () => {
    return(
        {data.map(product =>{
        <div>
        <img className="item-image" src={Image} alt=""/>
        <h1>Plecak Badger Outdoor Recon</h1>
        <h2>Stan: Dostępny</h2>
        <h3>Ocena: 4.5</h3>
        </div>
        
        }   
        );

        })}




export default ItemList;
