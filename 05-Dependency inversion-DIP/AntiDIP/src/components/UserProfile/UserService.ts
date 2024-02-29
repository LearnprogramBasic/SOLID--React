import { IUserService } from '../../interface/IUserService'; // Verifica la ruta y el nombre del archivo de la interfaz

export class UserService implements IUserService {
  getUser() {
    return { name: "John Doe", email: "john@example.com" };
  }
}
