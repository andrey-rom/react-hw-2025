import { useEffect, ReactNode } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { setCurrentUser, setLoading } from '../../store/slices/authSlice';

interface AuthInitializerProps {
  children: ReactNode;
}

const AuthInitializer = ({ children }: AuthInitializerProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(setCurrentUser(user));
      dispatch(setLoading(false));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthInitializer;

