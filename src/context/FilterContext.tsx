import { ReactNode, createContext, useState } from "react";

export type TaskFilter = "all" | "active" | "completed";

export interface ITaskFilterContext {
  filter: TaskFilter;
  setFilter: (filter: TaskFilter) => void;
}

interface ITaskFilterProviderProps {
  children: ReactNode;
}

export const TaskFilterContext = createContext<ITaskFilterContext>(
  {} as ITaskFilterContext
);

export const TaskFilterProvider = ({ children }: ITaskFilterProviderProps) => {
  const [filter, setFilter] = useState<TaskFilter>("all");

  return (
    <TaskFilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </TaskFilterContext.Provider>
  );
};
