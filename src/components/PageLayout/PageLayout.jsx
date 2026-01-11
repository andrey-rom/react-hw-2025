import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import MainInfo from '../MainInfo/MainInfo.jsx';
import './PageLayout.css';

const PageLayout = ({ 
  children, 
  showHeader = true, 
  showMainInfo = false, 
  showFooter = false 
}) => {
  return (
      <div className="page-layout">
        {showHeader && <Header />}
        {showMainInfo && <MainInfo />}
        <main className="page-layout-content">
          {children}
        </main>
        {showFooter && <Footer />}
      </div>
  );
};

export default PageLayout;

