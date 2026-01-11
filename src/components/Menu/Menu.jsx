import { useState, useEffect } from "react";
import { useCart } from "../CartContext/CartContext.jsx";
import MenuCard from "../MenuCard/MenuCard.jsx";

import "./Menu.css";

const API_URL = "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals";
const DEFAULT_LIMIT = 6;

const Menu = () => {
  const [dishes, setDishes] = useState([]);
  const [limit, setLimit] = useState(DEFAULT_LIMIT);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then(setDishes);
  }, []);

  const handleLoadMore = () => {
    setLimit(limit + DEFAULT_LIMIT);
  };

  const { addToCart } = useCart();

  const isAddMoreButtonVisible = dishes.length > limit;

  return (
    <div className="menu">
      <span className="menu-title">Browse our menu</span>
      <span className="menu-description">
        Use our menu to place an order online, or phone our store to place a
        pickup order. Fast and fresh food.
      </span>
      <div className="menu-buttons">
        <button className="menu-button menu-button-active">Dessert</button>
        <button className="menu-button">Dinner</button>
        <button className="menu-button">Breakfast</button>
      </div>
      <div className="menu-dishes">
        {dishes.slice(0, limit).map((dish) => (
          <MenuCard key={dish.id} dish={dish} onAddToCart={addToCart} />
        ))}
      </div>
      {isAddMoreButtonVisible && (
        <button className="menu-button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Menu;
