import React from 'react';

const SearchBar = props => {

    return(
    
        <form className="search-product" action="">
            <input
              className="search-product-input"
              type="text"
              placeholder="Czego szukasz?"
              onChange={console.log("aaa")}
            />
            <div
              className="search-product-button"
              type="submit"
              onClick={props.searchProduct}
            >
              SZUKAJ
            </div>
          </form>
    
    )
}

export default SearchBar;




