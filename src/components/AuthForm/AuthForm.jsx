import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';
import Input from '../ui/Input';
import './AuthForm.css';

const AuthForm = ({ mode = 'login' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const isLogin = mode === 'login';

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password);
      }
      
      navigate('/menu');
    } catch (err) {
      setError(err.message);
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

