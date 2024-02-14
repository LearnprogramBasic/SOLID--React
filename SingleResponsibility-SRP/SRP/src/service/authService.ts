export const authenticateUser = (username: string, password: string): boolean => {
    // Aquí iría la lógica real de autenticación, posiblemente haciendo una solicitud a un servidor
    return username === 'admin' && password === 'admin';
  };