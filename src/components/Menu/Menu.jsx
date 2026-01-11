import { useState } from "react";
import { useCart } from "../CartContext/CartContext.jsx";
import MenuCard from "../MenuCard/MenuCard.jsx";
import useFetch from "../../hooks/useFetch.js";

import "./Menu.css";

const API_URL = "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals";
const DEFAULT_LIMIT = 6;

const Menu = () => {
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [category, setCategory] = useState("dessert");

  const { data, error, loading } = useFetch(API_URL + (category ? `?category=${category}` : ""));
  const handleLoadMore = () => {
    setLimit(limit + DEFAULT_LIMIT);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.name);
  };

  const { addToCart } = useCart();

  const isAddMoreButtonVisible = data?.length > limit;

  return (
    <div className="menu">
      <span className="menu-title">Browse our menu</span>
      <span className="menu-description">
        Use our menu to place an order online, or phone our store to place a
        pickup order. Fast and fresh food.
      </span>
      <div className="menu-buttons">
        <button
          className={`menu-button ${
            category === "dessert" ? "menu-button-active" : ""
          }`}
          onClick={handleCategoryChange}
          name="dessert"
        >
          Dessert
        </button>
        <button
          className={`menu-button ${
            category === "dinner" ? "menu-button-active" : ""
          }`}
          onClick={handleCategoryChange}
          name="dinner"
        >
          Dinner
        </button>
        <button
          className={`menu-button ${
            category === "breakfast" ? "menu-button-active" : ""
          }`}
          onClick={handleCategoryChange}
          name="breakfast"
        >
          Breakfast
        </button>
      </div>
      <div className="menu-dishes">
        {data?.slice(0, limit).map((dish) => (
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
