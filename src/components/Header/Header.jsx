import { useRef } from "react";
import { useCart } from "../CartContext/CartContext.jsx";
import Logo from "../../assets/Logo.svg";
import CartButton from "./CartButton";

import "./Header.css";

export default function Header() {
  const { cart } = useCart();
  const cartButtonRef = useRef(null);

  const totalItems = Object.values(cart).reduce((acc, item) => acc + item.count, 0);

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

          <CartButton count={totalItems} />
        </div>
      </div>
    </header>
  );
}
