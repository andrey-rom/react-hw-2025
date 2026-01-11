import { useState, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { login, signup } from '../../store/slices/authSlice';
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
        setError((result.payload as string) || 'An error occurred');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const title = isLogin ? 'Login' : 'Sign Up';
  const buttonText = loading 
    ? (isLogin ? 'Logging in...' : 'Creating account...')
    : (isLogin ? 'Login' : 'Sign Up');
  const linkText = isLogin 
    ? "Don't have an account? " 
    : 'Already have an account? ';
  const linkTo = isLogin ? '/register' : '/login';
  const linkLabel = isLogin ? 'Sign up' : 'Log in';

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2 className="auth-title">{title}</h2>
        {error && <div className="auth-error">{error}</div>}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
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

