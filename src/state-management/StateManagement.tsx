import { useReducer } from "react";
import TasksContext from "./contexts/tasksContext";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import taskReducer from "./reducers/taskReducer";

const StateManagement = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TasksContext.Provider>
  );
};

export default StateManagement;
