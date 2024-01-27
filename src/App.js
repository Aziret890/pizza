import "./App.css";

import "./scss/app.scss";

import { Routes, Route } from "react-router-dom";

import Sort from "../src/components/Sort";
import Header from "../src/components/Hader";
import Categories from "../src/components/Categories";
import Home from "./components/pages/Home";
import NoPages from "./components/pages/noPages/NoPages";
import Card from "./components/Card";
import CardToBasket from "../src/components/pages/CardToBasket";
import { useEffect, useState } from "react";
// import { Routes } from 'react-router-dom'

function App() {
  const [seachPizza, setSearchPizza] = useState("");
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem("basket")) || []);
  }, []);

  return (
    <div className="wrapper">
      <Header
        basket={basket}
        setBasket={setBasket}
        seachPizza={seachPizza}
        setSearchPizza={setSearchPizza}
      />
      <div className="content">
        <div className="container container--cart">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  basket={basket}
                  setBasket={setBasket}
                  seachPizza={seachPizza}
                />
              }
            />
            <Route
              path="/NoPages"
              element={<NoPages basket={basket} setBasket={setBasket} />}
            />
            <Route path="/card" element={<CardToBasket />} />
          </Routes>
          {/* <Categories /> */}
          {/* <div className='cart'>
						<div className='cart__top'>
							<h2 className='content__title'> Корзина</h2>
							<div className='cart__clear'>
								<span>Очистить корзину</span>
							</div>
						</div>
						<div className='content__items'></div>
						<div className='cart__bottom'>
							<div className='cart__bottom-details'>
								<span>
									{' '}
									Всего пицц: <b>3 шт.</b>{' '}
								</span>
								<span>
									{' '}
									Сумма заказа: <b>900 ₽</b>{' '}
								</span>
							</div>
							<div className='cart__bottom-buttons'>
								<a
									href='/'
									className='button button--outline button--add go-back-btn'
								>
									<span>Вернуться назад</span>
								</a>
								<div className='button pay-btn'>
									<span>Оплатить сейчас</span>
								</div>
							</div>
						</div>
					</div> */}
        </div>
      </div>
      {/* <Home />
			<NoPages /> */}
    </div>
  );
}

export default App;
