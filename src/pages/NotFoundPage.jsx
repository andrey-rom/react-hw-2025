import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout/PageLayout.jsx';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <PageLayout showHeader={true} showMainInfo={false} showFooter={true}>
      <div className="not-found-page">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Page Not Found</h2>
          <p className="not-found-description">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link to="/" className="not-found-link">
            Go to Home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;

