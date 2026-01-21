import PageLayout from "../components/PageLayout/PageLayout";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import "./HomePage.css";

const HomePage = () => {
  const { t } = useLanguage();
  
  return (
    <PageLayout showHeader={true} showMainInfo={true} showFooter={true}>
      <div className="home-page-content">
        <h2 className="home-page-title">{t("homePage.title")}</h2>
        <p className="home-page-description">{t("homePage.description")}</p>
        <Link to="/login" className="home-page-login-link">
          {t("homePage.goToLogin")}
        </Link>
      </div>
    </PageLayout>
  );
};

export default HomePage;

