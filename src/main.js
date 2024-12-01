import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import data from "./file.json";

function App() {
  
  const [basket, setBasketItems] = useState([]);

  return (
    <div className="App">
      <div className="main-menu">
        <Category category="sports" basket={basket} setBasketItems={setBasketItems} />
        <Category category="movies" basket={basket} setBasketItems={setBasketItems}/>
      </div>
      <div className="basket">
        <h2>Basket</h2>
        <ul>
        {basket.map((basketItem) => (
            <div>
              <li className="basket-listing">
                {basketItem}
                <span
                  className="basket-delete"
                  onClick={() => setBasketItems(basket.filter((item) => item != basketItem))}
                >
                  Remove
                </span>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Category({ category, setBasketItems, basket }) {

  function handleChange(basketItem) {
    let isItemInBasket = false;
    for (let x of basket) {
      if (x == basketItem) {
        return isItemInBasket;
      }
    }
    if (!isItemInBasket) {
      setBasketItems([...basket, basketItem]);
    }
  }

  return(
    <div className="menu-category">
      <h2 className="menu-heading">{category}</h2>
      <div className="category">
        {data[category].map((item) => (
          <div className="box">
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <div className="button" onClick={() => {handleChange(item.title);}} >
              Add
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
