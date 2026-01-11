import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { removeFromCart, clearCart } from '../store/slices/cartSlice';
import PageLayout from "../components/PageLayout/PageLayout";
import './OrderPage.css';

const OrderPage = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    return acc + price * item.count;
  }, 0);

  return (
    <PageLayout showHeader={true} showMainInfo={false} showFooter={true}>
      <div className="order-page-container">
        <h1 className="order-page-title">Your Order</h1>
        {cart.length === 0 ? (
          <div className="order-empty-container">
            <p className="order-empty-text">Your cart is empty</p>
            <button
              onClick={() => navigate('/menu')}
              className="browse-menu-button"
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <div>
            <div className="cart-header">
              <h2>Cart Items</h2>
              {cart.length > 0 && (
                <button
                  onClick={() => dispatch(clearCart())}
                  className="clear-cart-button"
                >
                  Clear Cart
                </button>
              )}
            </div>
            <div className="cart-items-list">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="cart-item"
                >
                  <div className="cart-item-content">
                    <img
                      src={item.img}
                      alt={item.meal}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <p className="cart-item-name">{item.meal}</p>
                      <p className="cart-item-price">
                        ${parseFloat(item.price || '0').toFixed(2)} × {item.count}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="remove-item-button"
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <div className="order-summary">
              <div className="order-summary-header">
                <span className="order-summary-total">Total:</span>
                <span className="order-summary-total">${totalPrice.toFixed(2)} USD</span>
              </div>
              <button className="checkout-button">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default OrderPage;

