import { IPrivacySettings } from '../../interfaces/IUserProfile';

export const PrivacySettingsButton: React.FC<IPrivacySettings> = ({ onPrivacyChange }) => (
  <button onClick={onPrivacyChange}>Ajustes de Privacidad</button>
);