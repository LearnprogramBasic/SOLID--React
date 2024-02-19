import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const UserLogin: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { isLoggedIn, login } = useAuth();

  const handleLogin = () => login(username, password);
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Bienvenido, {username}!</h1>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
};

export default UserLogin;
