import { ReactNode, useReducer } from "react";
import TasksContext from "./contexts/tasksContext";
import taskReducer from "./reducers/taskReducer";

interface Props {
  children: ReactNode;
}

const TaskProvider = ({ children }: Props) => {
  const [tasks, taskDispatch] = useReducer(taskReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TaskProvider;
