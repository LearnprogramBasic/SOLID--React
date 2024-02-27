import { UserBasicInfo } from '../UserBasicInfo/UserBasicInfo';
import { ThemeChangerButton } from '../ThemeChangerButton/ThemeChangerButton';
import { PrivacySettingsButton } from '../PrivacySettingsButton/PrivacySettingsButton';

interface UserProfileProps {
  userName: string;
  userEmail: string;
  onThemeChange?: () => void;
  onPrivacyChange?: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  userName,
  userEmail,
  onThemeChange,
  onPrivacyChange
}) => (
  <div>
    <UserBasicInfo userName={userName} userEmail={userEmail} />
    {onThemeChange && <ThemeChangerButton onThemeChange={onThemeChange} />}
    {onPrivacyChange && <PrivacySettingsButton onPrivacyChange={onPrivacyChange} />}

  </div>
);
