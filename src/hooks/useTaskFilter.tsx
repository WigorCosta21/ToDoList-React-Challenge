import { useContext } from "react";
import {
  ITaskFilterContext,
  TaskFilterContext,
} from "../context/FilterContext";

export const useTaskFilter = (): ITaskFilterContext => {
  return useContext(TaskFilterContext);
};
