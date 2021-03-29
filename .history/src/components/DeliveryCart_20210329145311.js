import React from 'react';

const DeliveryCart = props => {

    return(
        <div className="delivery-cart">

        <div className="delivery-content">

        <h1 className="basket-title">Dostawa i płatność</h1>

        <h1 className="basket-value">Razem do zapłaty: {props.StateData.myBasket.reduce((acc, array) => acc + array.price, 0).toFixed(2)} zł</h1>


        <h1 className="delivery-title">1. Sposób dostawy</h1>
        
        <div className="delivery">
        <h1><div className="delivery-type"><input type="radio" name="delivery" onClick={props.selectCourier}/> Kurier - InPost, UPS lub FedEx - 14.99 zł</div></h1>
        <h1><div className="delivery-type"><input type="radio" name="delivery" onClick={props.selectInpost}/> Paczkomat inPost 24/7 9.99 zł</div></h1>
        <h1><div className="delivery-type"><input type="radio" name="delivery" onClick={props.selectPickup}/> Odbiór osobisty w salonie Electronet - 0 zł</div></h1>
        </div>

        <h1 className="delivery-title">2. Metoda płatności</h1>

        <div className="delivery">
        <h1><div className="delivery-type"><input type="radio" name="payment"/> Blik</div></h1>
        <h1><div className="delivery-type"><input type="radio" name="payment"/> Karta płatnicza online</div></h1>
        <h1><div className="delivery-type"><input type="radio" name="payment"/> Przelew gotówkowy</div></h1>
        <h1><div className="delivery-type"><input type="radio" name="payment"/> Szybki przelew DotPay</div></h1>
        <h1><div className="delivery-type"><input type="radio" name="payment"/> Przy odbiorze</div></h1>
        </div>

        <h1 className="delivery-title">3. Dane odbiorcy</h1>

        <div className="delivery">
        <h1 className="delivery-form"><form action=""><input className="delivery-input" onChange={props.formValidation} type="aaa" placeholder="Imię i nazwisko"/><span className="delivery-error"></span></form> </h1> 
        <h1 className="delivery-form"><form action=""><input className="delivery-input" onChange={props.formValidation} type="aaa" placeholder="Ulica i numer"/><span className="delivery-error"></span></form></h1>
        <h1 className="delivery-form"><form action=""><input className="delivery-input" onChange={props.formValidation} maxLength="6" type="aaa" placeholder="Kod pocztowy"/><span className="delivery-error"></span></form></h1>
        <h1 className="delivery-form"><form action=""><input className="delivery-input" onChange={props.formValidation} type="aaa" placeholder="Miejscowość"/><span className="delivery-error"></span></form></h1>
        <h1 className="delivery-form"><form action=""><input className="delivery-input" onChange={props.formValidation} type="aaa" placeholder="E-mail"/><span className="delivery-error"></span></form></h1>
        <h1 className="delivery-form"><form action=""><input className="delivery-input" onChange={props.formValidation} maxLength="9" type="aaa" placeholder="Telefon"/><span className="delivery-error"></span></form></h1>
        </div>

        <h1 className="delivery-title ">Zgody formalne</h1>

        <h1 className="delivery-agree"><input type="checkbox" name="" id="regulation-accept" onChange={props.formValidation}/> Akceptuję regulamin sklepu. * <span className="delivery-error"></span></h1>
        <h1 className="delivery-agree"><input type="checkbox" name="" id=""/> Chcę otrzymywać newsletter na podany adres e-mail. **</h1>
        <h5 className="delivery-agree"> * Akceptacja regulaminu sklepu jest konieczna do dokonania zakupów.</h5>
        <h5 className="delivery-agree"> ** Newsletter jest dobrowolny - zapisz się aby uzyskać 10% rabat na 3 pierwsze zakupy.</h5>

          

        <div className="cart-close" onClick={props.cartClose}>Wróć</div>
        <div className="order-proceed" onClick={props.orderSummary}>Podsumowanie</div>

        </div>
        </div>
    )
}

export default DeliveryCart;