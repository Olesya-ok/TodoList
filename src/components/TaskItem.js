import React from "react";

const TaskItem = ({ task, onDelete }) => {
    return (
        <div className="taskItem">
            <p>{task.text}</p>
            <button onClick={onDelete} className="deleteBtn">
                Delete
            </button>
        </div>
    );
};

export default TaskItem;

