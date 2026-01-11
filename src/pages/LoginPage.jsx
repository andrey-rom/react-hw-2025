import PageLayout from '../components/PageLayout/PageLayout.jsx';
import LoginForm from '../components/LoginForm/LoginForm.jsx';

const LoginPage = () => {
  return (
    <PageLayout showHeader={true} showMainInfo={false} showFooter={false}>
      <LoginForm />
    </PageLayout>
  );
};

export default LoginPage;

