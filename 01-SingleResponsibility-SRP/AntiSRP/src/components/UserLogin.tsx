import React, { useState } from 'react';
import './UserLogin.css'

interface User {
  username: string;
  password: string;
}

const UserLogin: React.FC = () => {
  const [user, setUser] = useState<User>({ username: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    if (user.username === 'admin' && user.password === '12345') {
      setIsLoggedIn(true);
    } else {
      alert('Credenciales inválidas');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      {isLoggedIn ? (
        <h1>Bienvenido, {user.username}!</h1>
        
      ) : (
        
        <div>
          <input
          className="form-control"
            name="username"
            type="text"
            placeholder="Nombre de usuario"
            value={user.username}
            onChange={handleInputChange}
          />
          
          <input
          className="form-control"
            name="password"
            type="password"
            placeholder="Contraseña"
            value={user.password}
            onChange={handleInputChange}
          />
          <hr/>
          <button className='btn btn-primary' onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}
    </div>
  );
};

export default UserLogin;
