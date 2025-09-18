import React from "react";
import { ThemeProvider } from "./contexts/ThemeProvider";
import Todo from "./components/Todo";

function App() {
  return (
    <ThemeProvider>
      <Todo />
    </ThemeProvider>
  );
}

export default App;
