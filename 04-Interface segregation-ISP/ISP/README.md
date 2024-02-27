# Aplicación del Principio de Segregación de Interfaces (ISP)

## Contexto

Para resolver el problema identificado en el antipatrón, segregamos las responsabilidades del componente `UserProfile` en interfaces más pequeñas y específicas. Esto permite a los consumidores del componente utilizar solo las partes de la interfaz que necesitan.

## Solución

La solución implica dividir la interfaz `UserProfileProps` en interfaces más pequeñas y crear componentes específicos para cada funcionalidad, como `ThemeChangeButton` y `PrivacySettingsButton`.

## Implementación

```typescript
// IThemeChange.ts
export interface IThemeChange {
  onThemeChange: () => void;
}

// IPrivacySettings.ts
export interface IPrivacySettings {
  onPrivacyChange: () => void;
}

// ThemeChangeButton.tsx
import React from 'react';
import { IThemeChange } from './IThemeChange';

const ThemeChangeButton: React.FC<IThemeChange> = ({ onThemeChange }) => (
  <button onClick={onThemeChange}>Cambiar Tema</button>
);

// PrivacySettingsButton.tsx
import React from 'react';
import { IPrivacySettings } from './IPrivacySettings';

const PrivacySettingsButton: React.FC<IPrivacySettings> = ({ onPrivacyChange }) => (
  <button onClick={onPrivacyChange}>Ajustes de Privacidad</button>
);

// UserProfile.tsx (Modificado)
import React from 'react';
import ThemeChangeButton from './ThemeChangeButton';
import PrivacySettingsButton from './PrivacySettingsButton';

interface UserProfileProps {
  userName: string;
  userEmail: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ userName, userEmail }) => {
  return (
    <div>
      <h1>{userName}</h1>
      <p>{userEmail}</p>
      {/* Opcionales, se pueden incluir según se necesiten */}
      {/* <ThemeChangeButton onThemeChange={...} /> */}
      {/* <PrivacySettingsButton onPrivacyChange={...} /> */}
    </div>
  );
};

export default UserProfile;

```
# Conclusión
Al aplicar el Principio de Segregación de Interfaces, logramos un diseño más flexible y mantenible, donde los consumidores de UserProfile solo dependen de las interfaces que realmente utilizan. Esto facilita la extensión y modificación del sistema sin afectar a los consumidores que no necesitan las nuevas funcionalidades.