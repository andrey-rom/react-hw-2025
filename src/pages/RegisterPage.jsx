import PageLayout from '../components/PageLayout/PageLayout.jsx';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm.jsx';

const RegisterPage = () => {
  return (
    <PageLayout showHeader={true} showMainInfo={false} showFooter={false}>
      <RegistrationForm />
    </PageLayout>
  );
};

export default RegisterPage;

