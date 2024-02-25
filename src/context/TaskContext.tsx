import { ReactNode, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useTaskFilter } from "../hooks/useTaskFilter";

export interface ITaskContext {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (id: number) => void;
  toggleCheckedTask: (id: number) => void;
  clearChecked: () => void;
}

interface ITaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export const TaskProvider = ({ children }: ITaskProviderProps) => {
  const { value: tasks, updateLocalStore } = useLocalStorage<ITask[]>(
    "@tasks",
    []
  );

  const { filter } = useTaskFilter();

  const addTask = (task: ITask) => {
    const newTask = [...tasks, task];
    updateLocalStore(newTask);
  };

  const removeTask = (id: number) => {
    const newTask = tasks.filter((task) => task.id !== id);
    updateLocalStore(newTask);
  };

  const toggleCheckedTask = (id: number) => {
    const newTask = tasks.map((task) =>
      task.id == id ? { ...task, checked: !task.checked } : task
    );
    updateLocalStore(newTask);
  };

  const clearChecked = () => {
    const newTask = tasks.map((taks) => ({ ...taks, checked: false }));

    updateLocalStore(newTask);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.checked;
    if (filter === "completed") return task.checked;
    return true;
  });

  return (
    <TaskContext.Provider
      value={{
        tasks: filteredTasks,
        addTask,
        removeTask,
        toggleCheckedTask,
        clearChecked,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
