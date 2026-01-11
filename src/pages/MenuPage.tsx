import PageLayout from "../components/PageLayout/PageLayout";
import Menu from "../components/Menu/Menu";

const MenuPage = () => {
  return (
    <PageLayout showHeader={true} showMainInfo={false} showFooter={true}>
      <Menu />
    </PageLayout>
  );
};

export default MenuPage;

