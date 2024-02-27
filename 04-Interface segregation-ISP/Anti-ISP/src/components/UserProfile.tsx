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