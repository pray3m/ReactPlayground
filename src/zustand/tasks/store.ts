import { create } from "zustand";

interface Task {
  id: number;
  title: string;
}

interface TaskStore {
  tasks: Task[];
  add: (task: Task) => void;
  remove: (id: number) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  add: (task) =>
    set((store) => ({
      tasks: [task, ...store.tasks],
    })),
  remove: (id) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.id !== id),
    })),
}));

export default useTaskStore;
