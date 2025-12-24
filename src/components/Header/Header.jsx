import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/slices/authSlice";
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/ShoppingCart.svg";
import Phone from "../../assets/phone.svg";

import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.auth);
  const cart = useAppSelector((state) => state.cart.items);

  const totalItems = cart.reduce((acc, item) => acc + item.count, 0);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
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

          <button className="button">
            <img src={Phone} title="Phone number" alt="phone" />
          </button>

          {currentUser && (
            <Link
              to="/order"
              className="cart"
              aria-label="Shopping cart"
            >
              <img src={Cart} alt="cart" />
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
