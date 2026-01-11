import PageLayout from '../components/PageLayout/PageLayout';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

const RegisterPage = () => {
  return (
    <PageLayout showHeader={true} showMainInfo={false} showFooter={false}>
      <RegistrationForm />
    </PageLayout>
  );
};

export default RegisterPage;

