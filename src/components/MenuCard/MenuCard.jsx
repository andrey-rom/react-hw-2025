import { useState } from "react";
import "./MenuCard.css";

const MenuCard = ({ dish, onAddToCart = () => {} }) => {
  const [quantity, setQuantity] = useState(1);

  const { img, meal, price } = dish;

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, value));
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(dish, quantity);
      setQuantity(1);
    }
  };

  return (
    <div className="menu-card">
      <img src={img} alt={meal} className="menu-card-image" />
      <div className="menu-card-content">
        <div className="menu-card-title-group">
          <p className="menu-card-title">{meal}</p>
          <p className="menu-card-price">{price} USD</p>
        </div>
        <div className="menu-card-actions">
          <div className="menu-card-quantity">
            <input
              type="number"
              className="quantity-input"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              aria-label="Quantity"
            />
          </div>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
