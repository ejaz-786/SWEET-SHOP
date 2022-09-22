import React from "react";
import Navbar from "./Navbar";
import "../CSS/Product.css";

const Product = () => {
  return (
    <>
      <Navbar />
      <div className="main-product-div">
      
        <div className="product-header">
        <h1>
              <img
                src="https://www.chhappanbhog.com/wp-content/themes/biagiotti/assets2/img/head_border_top.png"
                alt="asd"
              />
            </h1>
          <h1> Our Products </h1>
          <h1>
              <img
                src="https://www.chhappanbhog.com/wp-content/themes/biagiotti/assets2/img/head_border_top.png"
                alt="asd"
              />
            </h1>
        </div>

        <div className="location">
          <p>HOME/PRODCUTS</p>
        </div>

        <div className="product-div">
          <div className="filter-div">
                <h2 style={{textAlign:"center"}}>CATEGORY</h2>

                <div>
                  <button>Laddo</button>
                </div>
          </div>

          <div className="product-section">
                 <div className="inp-div">
                  <input id="search-inp"/>
                  <button id="search">FIND YOUR TASTE</button>
                 </div>
                
                <div className="card-div">
                    
                </div>
                 
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
