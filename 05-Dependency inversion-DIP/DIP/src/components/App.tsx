import {UserProfile} from './UseProfile/UseProfile';
import { UserService } from '../types/UserService';

const App: React.FC = () => {
  const userService = new UserService(); // Crear instancia de UserService

  return (
    <div>
      <UserProfile userService={userService} /> 
       //Inyectar UserService como dependencia
    </div>
  );
};

export default App;