import React, { useState, useEffect, useRef, useMemo, useCallback, useContext } from "react";
import ThemeContext from "./../../contexts/ThemeProvider"; // import the context

function Todo() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    const inputRef = useRef(null);

    // ✅ use the context
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        inputRef.current.focus();
        console.log("Todos changed:", todos);
    }, [todos]);

    const addTodo = useCallback(() => {
        if (task.trim() !== "") {
            setTodos((prev) => [...prev, task]);
            setTask("");
        }
    }, [task]);

    const totalChars = useMemo(() => {
        console.log("Calculating total chars...");
        return todos.reduce((acc, t) => acc + t.length, 0);
    }, [todos]);

    return (
        <div
            style={{
                padding: "20px",
                background: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "#fff"
            }}
        >
            <h2>Todo App ({theme} mode)</h2>

            <input
                ref={inputRef}
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter task"
            />
            <button onClick={addTodo}>Add</button>
            <button onClick={toggleTheme}>Toggle Theme</button> {/* ✅ use toggleTheme from context */}

            <ul>
                {todos.map((t, i) => (
                    <li key={i}>{t}</li>
                ))}
            </ul>

            <p>Total characters in tasks: {totalChars}</p>
        </div>
    );
}

export default Todo;
