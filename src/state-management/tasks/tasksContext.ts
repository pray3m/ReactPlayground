import React, { Dispatch } from "react";
import { Task, TaskAction } from "./TaskProvider";

interface TaskContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TaskContextType>(
  {} as TaskContextType
);

export default TasksContext;
