import AuthProvider from "./AuthProvider";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import TaskProvider from "./TaskProvider";

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
