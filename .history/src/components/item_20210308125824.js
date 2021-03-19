import React from 'react';
import Image from "../images/1.png";


const Item = () => {
    return (
    <div className="item">
        <img className="item-image" src={Image} alt=""/>
        <h1>Plecak Badger Outdoor Recon</h1>
        <h2>Stan: Dostępny</h2>
        <h3>Ocena: 4.5</h3>
    </div>
    )
}

export default Item;