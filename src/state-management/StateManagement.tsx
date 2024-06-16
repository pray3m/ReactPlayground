import { useReducer } from "react";
import TasksContext from "./contexts/tasksContext";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import taskReducer from "./reducers/taskReducer";
import authReducer from "./reducers/authReducer";
import AuthContext from "./contexts/authContext";

const StateManagement = () => {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
};

export default StateManagement;
