import React from "react";

const Buttons = (props) => {
  return (
    <div className="buttons">
      <div className="buttons-container">
        <button id="all" className="button-category" onClick={props.ChooseCategory}>
          Wszystko <img class="category-icon" src="all.png" alt="" />
        </button>
        <button id="memory" className="button-category" onClick={props.ChooseCategory}>
          Pamięć <img class="category-icon" src="ram.png" alt="" />
        </button>
        <button id="disk" className="button-category" onClick={props.ChooseCategory}>
          Dyski <img class="category-icon" src="hard-disk.png" alt="" />
        </button>
        <button id="accesories" className="button-category" onClick={props.ChooseCategory}>
          Peryferia <img class="category-icon" src="keyboard.png" alt="" />
        </button>
        <button id="graphic" className="button-category" onClick={props.ChooseCategory}>
          Grafika <img class="category-icon" src="graphics-card.png" alt="" />
        </button>
        <button id="sound" className="button-category" onClick={props.ChooseCategory}>
          Dźwięk <img class="category-icon" src="speaker.png" alt="" />
        </button>
        <button id="laptops" className="button-category" onClick={props.ChooseCategory}>
          Laptopy <img class="category-icon" src="laptop.png" alt="" />
        </button>
        <button id="monitors" className="button-category" onClick={props.ChooseCategory}>
          Monitory <img class="category-icon" src="lcd.png" alt="" />
        </button>
      </div>

      <div className="buttons-container">
        <button id="ascending" className="button-price-sort" onClick={props.PriceSort}>
          Od najtańszego <img class="category-icon" src="ascending.png" alt="" />
        </button>
        <button id="descending" className="button-price-sort" onClick={props.PriceSort}>
          Od najdroższego <img class="category-icon" src="descending.png" alt="" />
        </button>

        <div className="price-filter">
          <input
            className="min-price"
            placeholder="0"
            type="text"
            onChange={props.setMinPrice}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />

          <input
            className="max-price"
            placeholder="10000"
            type="text"
            onChange={props.setMaxPrice}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
