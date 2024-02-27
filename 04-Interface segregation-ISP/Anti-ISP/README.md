# Antipatrón de Principio de Segregación de Interfaces (ISP)

## Contexto

En este ejemplo, tenemos un componente `UserProfile` que maneja demasiadas responsabilidades. Este componente se encarga de mostrar la información del usuario y también ofrece opciones para cambiar el tema y los ajustes de privacidad, lo cual no es necesario para todos los consumidores de este componente.

## Problema

El ptroblema con ese enfoque es que fuerza a los consumidores del componente `UserProfile` a depender de interfaces que no utilizan. Esto viola el Principio de Segregación de Interfaces, que establece que ningún cliente debería verse forzado a depender de métodos que no utiliza.

## Implementación

```typescript
// UserProfile.tsx
import React from 'react';

interface UserProfileProps {
  userName: string;
  userEmail: string;
  onThemeChange: () => void; // No todos los consumidores necesitan cambiar el tema
  onPrivacyChange: () => void; // No todos los consumidores necesitan ajustes de privacidad
}

const UserProfile: React.FC<UserProfileProps> = ({ userName, userEmail, onThemeChange, onPrivacyChange }) => {
  return (
    <div>
      <h1>{userName}</h1>
      <p>{userEmail}</p>
      <button onClick={onThemeChange}>Cambiar Tema</button>
      <button onClick={onPrivacyChange}>Ajustes de Privacidad</button>
    </div>
  );
};

export default UserProfile;
```
# Conclusión
Este enfoque puede llevar a un diseño rígido y difícil de mantener, ya que cualquier cambio en las necesidades del componente podría requerir cambios en todos los consumidores, incluso si no utilizan todas las funcionalidades proporcionadas