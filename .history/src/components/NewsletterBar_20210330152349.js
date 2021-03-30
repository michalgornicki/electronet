import React from "react";

const NewsletterBar = (props) => {
  return (
    <div className="bar-large" alt="">
      <div className="bar-text bar-text-large">
        <div className="bar-text-1">Zapisz się na Newsletter</div>
        <div className="bar-text-2 bar-text-2-large">i odbierz 10% rabatu </div>
        <div className="bar-text-3">na trzy pierwsze produkty</div>
        <form className="newsletter-form" action="">
          <input
            className="newsletter-input"
            type="text"
            placeholder="wpisz swój adres e-mail"
          />
          <button className="newsletter-button">Zapisz się</button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterBar;
