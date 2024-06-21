import { useContext } from "react";
import LoginStatus from "./LoginStatus";
import TasksContext from "./tasks/tasksContext";

const useTasks = () => useContext(TasksContext);

const NavBar = () => {
  const { tasks } = useTasks();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
