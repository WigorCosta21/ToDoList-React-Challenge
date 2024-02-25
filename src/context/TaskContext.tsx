import { ReactNode, createContext, useState } from "react";

export interface ITaskContext {
  tasks: ITask[];
  addTask: (task: ITask) => void;
}

interface ITaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export const TaskProvider = ({ children }: ITaskProviderProps) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addTask = (task: ITask) => {
    setTasks([...tasks, task]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
