import { ReactNode, createContext } from "react";
import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/light";
import { useLocalStorage } from "../hooks/useLocalStorage";

export interface IThemeContext {
  theme: ITheme;
  toggleTheme: () => void;
}

interface IThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const { value: theme, updateLocalStore } = useLocalStorage<ITheme>(
    "@theme",
    darkTheme
  );

  const toggleTheme = () => {
    const newTheme = theme === darkTheme ? lightTheme : darkTheme;
    updateLocalStore(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
