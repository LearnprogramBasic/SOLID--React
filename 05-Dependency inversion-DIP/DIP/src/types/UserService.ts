import { IUserService } from './IUserService';

export class UserService implements IUserService {
  getUser() {
    return { name: "John Doe", email: "john@example.com" };
  }
}