import "./Header.css";
import Logo from "../../assets/Logo.svg";
import CartButton from "./CartButton";

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

          <CartButton count={0} />
        </div>
      </div>
    </header>
  );
}
