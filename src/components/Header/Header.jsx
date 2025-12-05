import "./Header.css";
import Logo from "../../assets/Logo.svg";
import Cart from "../../assets/ShoppingCart.svg";
import Phone from "../../assets/phone.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-group">
          <img src={Logo} alt="logo" />
        </div>

        <div className="header-actions">
          <nav className="nav">
            <a href="#home" className="nav-link active">
              Home
            </a>
            <a href="#menu" className="nav-link">
              Menu
            </a>
            <a href="#company" className="nav-link">
              Company
            </a>
            <a href="#login" className="nav-link">
              Login
            </a>
          </nav>

          <button className="button">
            <img src={Phone} title="Phone number" alt="phone" />
          </button>

          <button className="button">
            <img src={Cart} alt="cart" />
            <span className="cart-badge">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
