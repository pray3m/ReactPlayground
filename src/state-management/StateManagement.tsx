import AuthProvider from "./auth/AuthProvider";
import HomePage from "./HomePage";
import NavBar from "./NavBar";

import { TaskProvider } from "./tasks";

const StateManagement = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <NavBar />
        <HomePage />
      </TaskProvider>
    </AuthProvider>
  );
};

export default StateManagement;
