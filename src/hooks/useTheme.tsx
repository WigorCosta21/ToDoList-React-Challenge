import { useContext } from "react";
import { IThemeContext, ThemeContext } from "../context/ThemeContext";

export const useTheme = (): IThemeContext => {
  return useContext(ThemeContext);
};
