import { useState, useRef, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext.jsx";
import { useAuth } from "../AuthContext/AuthContext.jsx";
import CartPopover from "../CartPopover/CartPopover.jsx";
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/ShoppingCart.svg";
import Phone from "../../assets/phone.svg";

import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  const cartContext = useContext(CartContext);
  const cart = cartContext?.cart || [];
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartButtonRef = useRef(null);

  const totalItems = cart.reduce((acc, item) => acc + item.count, 0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-group">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="header-actions">
          <nav className="nav">
            <Link 
              to="/" 
              className={`nav-link ${isActive("/") ? "active" : ""}`}
            >
              Home
            </Link>
            {currentUser && (
              <Link 
                to="/menu" 
                className={`nav-link ${isActive("/menu") ? "active" : ""}`}
              >
                Menu
              </Link>
            )}
            <a className="nav-link">Company</a>
            {currentUser ? (
              <button 
                onClick={handleLogout}
                className="nav-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '14px' }}
              >
                Logout
              </button>
            ) : (
              <Link 
                to="/login" 
                className={`nav-link ${isActive("/login") ? "active" : ""}`}
              >
                Login
              </Link>
            )}
          </nav>
          {currentUser && (
            <button
              ref={cartButtonRef}
              className="button"
              onClick={toggleCart}
              aria-label="Shopping cart"
            >
              <img src={Cart} alt="cart" />
              <span className="cart-badge">{totalItems}</span>
            </button>
          )}
        </div>
      </div>
      {currentUser && (
        <CartPopover
          isOpen={isCartOpen}
          onClose={closeCart}
          triggerRef={cartButtonRef}
        />
      )}
    </header>
  );
}
