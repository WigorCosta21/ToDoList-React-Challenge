import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { TaskProvider } from "./context/TaskContext.tsx";
import { TaskFilterProvider } from "./context/FilterContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <TaskFilterProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </TaskFilterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
