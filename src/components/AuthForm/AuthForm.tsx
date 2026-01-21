import { useState, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { login, signup } from '../../store/slices/authSlice';
import { useLanguage } from '../../contexts/LanguageContext';
import Input from '../ui/Input';
import './AuthForm.css';
import type { AuthFormProps } from '../../types';

const AuthForm = ({ mode = 'login' }: AuthFormProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useLanguage();
  const isLogin = mode === 'login';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setError('');
    setLoading(true);
    
    try {
      const result = await dispatch(
        isLogin 
          ? login({ email, password })
          : signup({ email, password })
      );
      
      if (result.type.endsWith('/fulfilled')) {
        navigate('/menu');
      } else if (result.type.endsWith('/rejected')) {
        setError((result.payload as string) || t("auth.error"));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : t("auth.error"));
    } finally {
      setLoading(false);
    }
  };

  const title = isLogin ? t("auth.login") : t("auth.signUp");
  const buttonText = loading 
    ? (isLogin ? t("auth.loggingIn") : t("auth.creatingAccount"))
    : (isLogin ? t("auth.login") : t("auth.signUp"));
  const linkText = isLogin 
    ? t("auth.noAccount") + " "
    : t("auth.haveAccount") + " ";
  const linkTo = isLogin ? '/register' : '/login';
  const linkLabel = isLogin ? t("auth.signUpLink") : t("auth.loginLink");

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2 className="auth-title">{title}</h2>
        {error && <div className="auth-error">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label htmlFor="email">{t("auth.email")}</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={t("auth.enterEmail")}
            />
          </div>
          <div className="auth-field">
            <label htmlFor="password">{t("auth.password")}</label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder={t("auth.enterPassword")}
              minLength={isLogin ? undefined : 6}
            />
          </div>
          <button type="submit" disabled={loading} className="auth-button">
            {buttonText}
          </button>
        </form>
        <p className="auth-link">
          {linkText}
          <Link to={linkTo}>{linkLabel}</Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;

