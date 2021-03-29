import React from 'react';

const BasketCart = props => {
    return(
    
        <div className="bar-container">

        <div className="bar-slider">
          <div className="bar slide slide-1" alt="" style={{opacity: this.state.slideIndex == 1 ? "1" : "0"}}> 
            <div className="bar-text"> 
              <div className="bar-text-1">darmowa dostawa od 150 zł</div> 
              <div className="bar-text-2">raty 10 x 0%</div> 
              <div className="bar-text-3">zakupy dostępne od ręki</div>
            </div>
    
          </div>
    
          <div className="bar slide slide-2" alt="" style={{opacity: this.state.slideIndex == 2 ? "1" : "0"}}> 
            <div className="bar-text"> 
              <div className="bar-text-1">Najlepsze akcesoria gamingowe</div> 
            </div> 
          </div>
    
          <div className="bar slide slide-3" alt="" style={{opacity: this.state.slideIndex == 3 ? "1" : "0"}}> 
            <div className="bar-text"> 
              <div className="bar-text-1">Klawiatury do pracy zdalnej</div> 
            </div> 
          </div>
    
          <div className="bar slide slide-4" alt="" style={{opacity: this.state.slideIndex == 4 ? "1" : "0"}}> 
            <div className="bar-text"> 
              <div className="bar-text-1">Profesjonalne drony już od 999 zł</div> 
            </div> 
          </div>
    
          <div className="bar slide slide-5" alt="" style={{opacity: this.state.slideIndex == 5 ? "1" : "0"}}> 
            <div className="bar-text"> 
              <div className="bar-text-1">Zapisz się na newsletter i zgarnij rabat 10%</div> 
            </div> 
        </div>
    
        <div className="bar-selector-container">
        <div className="bar-selector" style={{color: this.state.slideIndex == 1 ? "white" : "gray"}}>___</div>
        <div className="bar-selector" style={{color: this.state.slideIndex == 2 ? "white" : "gray"}}>___</div>
        <div className="bar-selector" style={{color: this.state.slideIndex == 3 ? "white" : "gray"}}>___</div>
        <div className="bar-selector" style={{color: this.state.slideIndex == 4 ? "white" : "gray"}}>___</div>
        <div className="bar-selector" style={{color: this.state.slideIndex == 5 ? "white" : "gray"}}>___</div>
        </div>
    
        </div>
    
        <div className="bar-double" style={{display: this.state.showBars ? "block" : "none"}}>
        <div className="bar-small bar-small-1" alt=""> <div className="bar-text bar-text-small">Tanie laptopy do pracy i nauki </div> </div>
        <div className="bar-small bar-small-2" alt=""> <div className="bar-text bar-text-small">Karty graficzne Nvidia i Radeon - rabaty do 20% </div> </div>
        </div>
    
        </div>

    )
}

export default BasketCart;