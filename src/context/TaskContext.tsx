import { ReactNode, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export interface ITaskContext {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  removeTask: (id: number) => void;
  toggleCheckedTask: (id: number) => void;
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

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, removeTask, toggleCheckedTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
