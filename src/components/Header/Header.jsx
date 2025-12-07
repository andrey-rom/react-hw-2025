import { useState, useRef } from "react";
import { useCart } from "../CartContext/CartContext.jsx";
import CartPopover from "../CartPopover/CartPopover.jsx";
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/ShoppingCart.svg";
import Phone from "../../assets/phone.svg";

import "./Header.css";

export default function Header() {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartButtonRef = useRef(null);

  const totalItems = cart.reduce((acc, item) => acc + item.count, 0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-group">
          <img src={Logo} alt="logo" />
        </div>

        <div className="header-actions">
          <nav className="nav">
            <a className="nav-link active">Home</a>
            <a className="nav-link">Menu</a>
            <a className="nav-link">Company</a>
            <a className="nav-link">Login</a>
          </nav>

          <button className="button">
            <img src={Phone} title="Phone number" alt="phone" />
          </button>

          <button
            ref={cartButtonRef}
            className="button"
            onClick={toggleCart}
            aria-label="Shopping cart"
          >
            <img src={Cart} alt="cart" />
            <span className="cart-badge">{totalItems}</span>
          </button>
        </div>
      </div>
      <CartPopover
        isOpen={isCartOpen}
        onClose={closeCart}
        triggerRef={cartButtonRef}
      />
    </header>
  );
}
