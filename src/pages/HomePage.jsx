import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import MainInfo from "../components/MainInfo/MainInfo.jsx";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Header />
      <MainInfo />
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2>Welcome to our Restaurant</h2>
        <p style={{ marginBottom: '20px' }}>Please log in to view our menu</p>
        <Link to="/login" style={{ 
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: '500'
        }}>
          Go to Login
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
