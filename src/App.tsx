import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobaStyles";
import { useTheme } from "./hooks/useTheme";
import { Todo } from "./components/Todo";

export const App = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Todo />
    </ThemeProvider>
  );
};
