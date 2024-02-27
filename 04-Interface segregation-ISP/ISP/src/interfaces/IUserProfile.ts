export interface IUserBasicInfo {
    userName: string;
    userEmail: string;
  }
  
  export interface IThemeChanger {
    onThemeChange: () => void;
  }
  
  export interface IPrivacySettings {
    onPrivacyChange: () => void;
  }