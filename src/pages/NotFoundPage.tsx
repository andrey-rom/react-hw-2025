import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import PageLayout from '../components/PageLayout/PageLayout';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const { t } = useLanguage();
  
  return (
    <PageLayout showHeader={true} showMainInfo={false} showFooter={true}>
      <div className="not-found-page">
        <div className="not-found-content">
          <h1 className="not-found-title">{t("notFound.title")}</h1>
          <h2 className="not-found-subtitle">{t("notFound.subtitle")}</h2>
          <p className="not-found-description">
            {t("notFound.description")}
          </p>
          <Link to="/" className="not-found-link">
            {t("notFound.goHome")}
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;

