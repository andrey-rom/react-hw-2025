import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import MainInfo from "../components/MainInfo/MainInfo.jsx";
import Menu from "../components/Menu/Menu.jsx";
import { CartProvider } from "../components/CartContext/CartContext.jsx";

const HomePage = () => {
  return (
    <CartProvider>
      <div>
        <Header />
        {/* <MainInfo /> */}
        <Menu />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default HomePage;
