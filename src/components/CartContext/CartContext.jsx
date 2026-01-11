import { createContext, useState, useContext } from "react";

const CartContext = createContext({
  cart: {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[id];
      return newCart;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const addToCart = (item, count) => {
    setCart((prevCart) => {
      const existingItem = prevCart[item.id];
      if (existingItem) {
        return {
          ...prevCart,
          [item.id]: { ...existingItem, count: existingItem.count + count },
        };
      } else {
        return {
          ...prevCart,
          [item.id]: { ...item, count },
        };
      }
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
