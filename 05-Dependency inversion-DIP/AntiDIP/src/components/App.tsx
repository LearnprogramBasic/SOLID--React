
import UserProfile from './UserProfile/UserProfile';
import { UserService } from './UserProfile/UserService'; 

const App: React.FC = () => {
  const userService = new UserService();

  return (
    <>
      <UserProfile userService={userService} />
    </>
  );
};

export default App;

