import PageLayout from "../components/PageLayout/PageLayout.jsx";
import Menu from "../components/Menu/Menu.jsx";

const MenuPage = () => {
  return (
    <PageLayout showHeader={true} showMainInfo={false} showFooter={true}>
      <Menu />
    </PageLayout>
  );
};

export default MenuPage;

