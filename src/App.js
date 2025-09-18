import React, { useState, createContext } from "react";
import Todo from "./components/Todo";

// 1️⃣ Create a Theme Context
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    // 2️⃣ Provide Theme context
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Todo />
    </ThemeContext.Provider>
  );
}

export default App;
