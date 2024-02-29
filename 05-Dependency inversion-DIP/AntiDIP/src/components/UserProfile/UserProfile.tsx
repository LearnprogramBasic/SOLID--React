import React from 'react';
import { IUserService } from '../../interface/IUserService';

interface UserProfileProps {
  userService: IUserService;
}

export class UserProfile extends React.Component<UserProfileProps> {
  render() {
    const user = this.props.userService.getUser();
    return (
      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
    );
  }
}

export default UserProfile;