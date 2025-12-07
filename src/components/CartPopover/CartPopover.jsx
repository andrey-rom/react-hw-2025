import { useRef, useEffect } from "react";
import { useCart } from "../CartContext/CartContext.jsx";

import "./CartPopover.css";

const CartPopover = ({ isOpen, onClose, triggerRef }) => {
  const popoverRef = useRef(null);
  const { cart, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, triggerRef]);

  useEffect(() => {
    if (isOpen && popoverRef.current && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const popover = popoverRef.current;

      popover.style.top = `${triggerRect.bottom + 10}px`;
      popover.style.right = `${window.innerWidth - triggerRect.right}px`;
    }
  }, [isOpen, triggerRef]);

  if (!isOpen) return null;

  const totalPrice = cart.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    return acc + price * item.count;
  }, 0);

  return (
    <>
      <div className="popover-overlay" onClick={onClose} />
      <div className="cart-popover" ref={popoverRef}>
        <div className="cart-popover-header">
          <h3 className="cart-popover-title">Cart</h3>
          {cart.length > 0 && (
            <button className="cart-popover-clear" onClick={clearCart}>
              Clear
            </button>
          )}
        </div>
        <div className="cart-popover-content">
          {cart.length === 0 ? (
            <div className="cart-popover-empty">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="cart-popover-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-popover-item">
                  <div className="cart-item-info">
                    <img
                      src={item.img}
                      alt={item.meal}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <p className="cart-item-name">{item.meal}</p>
                      <p className="cart-item-price">
                        ${parseFloat(item.price || 0).toFixed(2)} × {item.count}
                      </p>
                    </div>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-popover-footer">
            <div className="cart-popover-total">
              <span className="total-label">Total:</span>
              <span className="total-price">${totalPrice.toFixed(2)} USD</span>
            </div>
            <button className="cart-popover-checkout">Checkout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPopover;
