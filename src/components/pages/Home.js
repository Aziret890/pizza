import React from "react";

import { useEffect, useState } from "react";
import Card from "../Card";
import Categories from "../Categories";

import Sort from "../Sort";
function Home({ seachPizza, basket, setBasket }) {
  const [items, setItems] = useState([]);
  let [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState(0);
  const [listActive, setListActive] = useState(0);
  useEffect(() => {
    fetch(
      `https://65b1dfc19bfb12f6eafc449a.mockapi.io/pizza?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }`
    )
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, [categoryId, sortType]);
  return (
    <>
      <Categories
        value={categoryId}
        onClickCategoty={(ind) => setCategoryId(ind)}
      />
      {/* <Sort value={sortType} onChangeSort={(ind) => setSortType(ind)} /> */}

      <div className="cardWrapper">
        {items
          .filter((el) =>
            el.title.toLowerCase().includes(seachPizza.toLowerCase())
              ? true
              : false
          )
          .map((el) => (
            <Card
              basket={basket}
              setBasket={setBasket}
              props={el}
              key={el.id}
              title={el.title}
              images={el.imageUrl}
              price={el.price}
              types={el.types}
              sizes={el.sizes}
            />
          ))}
      </div>
    </>
  );
}

export default Home;
