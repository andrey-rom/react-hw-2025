import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/slices/authSlice";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/ShoppingCart.svg";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.auth);
  const cart = useAppSelector((state) => state.cart.items);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const totalItems = cart.reduce((acc, item) => acc + item.count, 0);

  const handleLogout = async (): Promise<void> => {
    try {
      await signOut(auth);
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const isActive = (path: string): boolean => location.pathname === path;

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
              {t("header.home")}
            </Link>
            {currentUser && (
              <Link 
                to="/menu" 
                className={`nav-link ${isActive("/menu") ? "active" : ""}`}
              >
                {t("header.menu")}
              </Link>
            )}
            <a className="nav-link">{t("header.company")}</a>
            {currentUser ? (
              <button 
                onClick={handleLogout}
                className="nav-link-button"
              >
                {t("header.logout")}
              </button>
            ) : (
              <Link 
                to="/login" 
                className={`nav-link ${isActive("/login") ? "active" : ""}`}
              >
                {t("header.login")}
              </Link>
            )}
          </nav>
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
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as "en" | "es" | "ru")}
            className="language-select"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="ru">RU</option>
          </select>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </header>
  );
}

