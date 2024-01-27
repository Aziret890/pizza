import React, { useState } from "react";

function CardBasket({ basket, setBasket }) {
  const [counterLi, setCounterLi] = useState(1);

  function Delete(id) {
    let data = JSON.parse(localStorage.getItem("basket")) || [];
    data = data.filter((el) => el.id !== id);
    localStorage.setItem("basket", JSON.stringify(data));
    setBasket(data);
  }

  function onCounterli(type) {
    if (type === "+") {
      setCounterLi(counterLi + 1);
    }
    if (type === "-") {
      setCounterLi((prev) => (prev === 1 ? 1 : prev - 1));
    }
  }

  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          {basket.map((props) => (
            <div className="pizza-block">
              <img
                className="pizza-block__image"
                src={props.imageUrl}
                alt="Pizza"
              />
              <h4 className="pizza-block__title">{props.title}</h4>
              <div className="pizza-block__selector">
                {/* <ul>
                  {props.types.map((el, ind) => (
                    <li key={ind}></li>
                  ))}
                </ul> */}
                <ul>
                  {/* {props.sizes.map((el, ind) => (
                    <li key={ind} className="active">
                      {el}
                    </li>
                  ))} */}
                  {
                    <>
                      <button
                        onClick={() => onCounterli("+")}
                        className="btnCounter"
                      >
                        +
                      </button>
                      <li>{counterLi}</li>
                      <button
                        onClick={() => onCounterli("-")}
                        className="btnCounter"
                      >
                        -
                      </button>
                    </>
                  }
                </ul>
              </div>
              <div className="pizza-block__bottom">
                <div className="pizza-block__price">
                  {props.price * counterLi} сом
                </div>
                <button
                  onClick={() => {
                    Delete(props.id);
                  }}
                  className="button button--outline button--add"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardBasket;
