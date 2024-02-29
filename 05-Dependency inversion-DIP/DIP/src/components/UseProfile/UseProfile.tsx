import React from 'react';
import { IUserService } from '../../types/IUserService';

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