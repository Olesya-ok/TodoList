import React, { useRef } from "react";

const TaskInput = ({ addTask }) => {
    const newTaskElement = useRef(null);

    const onAddClick = () => {
        const text = newTaskElement.current.value.trim();
        if (text) {
            addTask(text);
            newTaskElement.current.value = "";
        }
    };

    return (
        <div className="inputTask">
            <input
                ref={newTaskElement}
                onKeyDown={(e) => e.key === "Enter" && onAddClick()}
                placeholder="Enter your task"
            />
            <button onClick={onAddClick}>Add</button>
        </div>
    );
};

export default TaskInput;
