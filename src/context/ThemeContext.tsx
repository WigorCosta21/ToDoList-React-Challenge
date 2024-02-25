import { ReactNode, createContext, useState } from "react";
import { darkTheme } from "../themes/dark";
import { lightTheme } from "../themes/light";

export interface IThemeContext {
  theme: ITheme;
  toggleTheme: () => void;
}

interface IThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<ITheme>(darkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === darkTheme ? lightTheme : darkTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
