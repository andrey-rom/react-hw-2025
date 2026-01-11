import PageLayout from '../components/PageLayout/PageLayout';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <PageLayout showHeader={true} showMainInfo={false} showFooter={false}>
      <LoginForm />
    </PageLayout>
  );
};

export default LoginPage;

