import { IUserBasicInfo } from '../../interfaces/IUserProfile';

export const UserBasicInfo: React.FC<IUserBasicInfo> = ({ userName, userEmail }) => (
  <div>
    <h1>{userName}</h1>
    <p>{userEmail}</p>
  </div>
);
