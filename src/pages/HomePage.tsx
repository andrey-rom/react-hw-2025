import PageLayout from "../components/PageLayout/PageLayout";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <PageLayout showHeader={true} showMainInfo={true} showFooter={true}>
      <div className="home-page-content">
        <h2 className="home-page-title">Welcome to our Restaurant</h2>
        <p className="home-page-description">Please log in to view our menu</p>
        <Link to="/login" className="home-page-login-link">
          Go to Login
        </Link>
      </div>
    </PageLayout>
  );
};

export default HomePage;

