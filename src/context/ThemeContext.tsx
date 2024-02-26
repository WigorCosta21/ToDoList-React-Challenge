import { ReactNode, createContext, useEffect, useState } from "react";
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
  const { value: storedTheme, updateLocalStore } = useLocalStorage<ITheme>(
    "@theme",
    darkTheme
  );
  useEffect(() => {
    if (storedTheme === lightTheme) {
      updateLocalStore(darkTheme);
    }
  }, [storedTheme, updateLocalStore]);

  const [theme, setTheme] = useState<ITheme>(storedTheme);

  const toggleTheme = () => {
    const newTheme = theme === darkTheme ? lightTheme : darkTheme;
    setTheme(newTheme);
    updateLocalStore(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
