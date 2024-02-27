import UserProfile from './UserProfile';

const App: React.FC = () => {
  // Simulación de manejadores para los eventos, aunque no sean necesarios para algunos consumidores
  const handleThemeChange = () => {
    console.log("Tema cambiado");
  };

  const handlePrivacyChange = () => {
    console.log("Privacidad ajustada");
  };

  return (
    <div>
      <h1>Perfil del Usuario</h1>
      <UserProfile
        userName="John Doe"
        userEmail="john@example.com"
        onThemeChange={handleThemeChange}
        onPrivacyChange={handlePrivacyChange}
      />
    </div>
  );
};

export default App;