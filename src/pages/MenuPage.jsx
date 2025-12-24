import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Menu from "../components/Menu/Menu.jsx";
import { CartProvider } from "../components/CartContext/CartContext.jsx";

const MenuPage = () => {
  return (
    <CartProvider>
      <div>
        <Header />
        <Menu />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default MenuPage;

