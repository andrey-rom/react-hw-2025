import { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainInfo from '../MainInfo/MainInfo';
import './PageLayout.css';

interface PageLayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showMainInfo?: boolean;
  showFooter?: boolean;
}

const PageLayout = ({ 
  children, 
  showHeader = true, 
  showMainInfo = false, 
  showFooter = false 
}: PageLayoutProps) => {
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

