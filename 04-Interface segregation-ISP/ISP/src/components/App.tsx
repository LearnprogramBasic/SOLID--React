import React from 'react';
import { UserProfile } from './UserProfile/UserProfile';

export const App: React.FC = () => {
  return (
    <UserProfile
      userName="Jane Doe"
      userEmail="jane@example.com"
      onThemeChange={() => console.log("Tema cambiado")}
      onPrivacyChange={() => console.log("Ajustes de privacidad cambiados")}
      // Omitimos onPrivacyChange si no es necesario
    />
  );
};

