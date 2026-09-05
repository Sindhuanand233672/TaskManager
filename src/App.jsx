import "./App.css"
import Taskform from "./Components/Taskform"
import Tasklist from "./Components/Tasklist"
import Progresstracker from "./Components/Progresstracker"
import { useEffect, useState } from "react"

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [theme, setTheme] = useState("blue");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "blue" ? "pink" : "blue"));
    }

    const addTask = (task) => {
        setTasks([...tasks, task]);
    }

    const updateTask = (updatedTask, index) => {
        const newtask = [...tasks];
        newtask[index] = updatedTask;
        setTasks(newtask);
    }

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    const clearTasks = () => {
        setTasks([]);
    }

    return (
        <div className="app">
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "blue" ? "Dark" : "Light"}
            </button>

            <h1>TallyUp</h1>
            <p><i>Friendly Task manager!</i></p>

            <Taskform addTask={addTask} />

            <Tasklist
                tasks={tasks}
                updateTask={updateTask}
                deleteTask={deleteTask}
            />

            <Progresstracker tasks={tasks} />

            {tasks.length > 0 && (
                <button
                    className="clear-btn"
                    onClick={clearTasks}
                >
                    Clear Tasks
                </button>
            )}
        </div>
    )
}
