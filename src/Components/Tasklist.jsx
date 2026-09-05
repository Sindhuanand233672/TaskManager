import React from "react"
import confetti from "canvas-confetti"

export default function Tasklist({ tasks, updateTask, deleteTask }) {

    const toggleComplete = (index) => {
        const updatedTask = {
            ...tasks[index],
            completed: !tasks[index].completed
        };

        updateTask(updatedTask, index);

        if (!tasks[index].completed) {
            confetti({
                particleCount: 90,
                spread: 70,
                origin: { y: 0.7 }
            });
        }
    }

    if (tasks.length === 0) {
        return <p className="empty-state">No tasks yet — add one above</p>;
    }

    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <li
                    key={index}
                    className={`task-item ${task.completed ? "completed" : ""}`}
                    data-priority={task.priority}
                >
                    <span>
                        {task.text}({task.priority}, {task.category})
                    </span>

                    <div className="task-actions">
                        <button className="btn-complete" onClick={() => toggleComplete(index)}>
                            {task.completed ? "Undo" : "Complete"}
                        </button>

                        <button className="btn-delete" onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}