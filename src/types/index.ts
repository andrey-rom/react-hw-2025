import { User } from 'firebase/auth';

export interface AuthState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

export interface CartItem {
  id: string;
  meal: string;
  price: string;
  img: string;
  count: number;
}

export interface CartState {
  items: CartItem[];
}

export interface MenuItem {
  id: string;
  meal: string;
  price: string;
  img: string;
  category?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthFormProps {
  mode?: 'login' | 'register';
}

