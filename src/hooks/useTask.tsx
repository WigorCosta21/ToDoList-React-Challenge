import { useContext } from "react";
import { ITaskContext, TaskContext } from "../context/TaskContext";

export const useTask = (): ITaskContext => {
  return useContext(TaskContext);
};
