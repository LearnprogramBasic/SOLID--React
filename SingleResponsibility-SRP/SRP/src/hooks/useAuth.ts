import { useState } from 'react';
import { authenticateUser } from '../service/authService';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = (username: string, password: string) => {
    const isAuth = authenticateUser(username, password);
    setIsLoggedIn(isAuth);
    if (!isAuth) {
      alert('Credenciales inválidas');
    }
  };

  return { isLoggedIn, login };
};