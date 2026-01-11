
import Button from "../ui/Button";
import Cart from "../../assets/ShoppingCart.svg";
import "./Header.css";

const CartButton = ({ count = 0, onClick, ...props }) => {
  return (
    <Button className="cart-button" onClick={onClick} {...props}>
      <img src={Cart} alt="cart" />
      {count > 0 && <span className="cart-badge">{count}</span>}
    </Button>
  );
};

export default CartButton;

