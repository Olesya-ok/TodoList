import React from "react";
import { addTask, deleteTask } from "../redux/actions";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";

const TodoList = ({ tasks, newTaskText, dispatch }) => {
    const addNewTask = (text) => {
        dispatch(addTask(text));
    };

    return (
        <div>
            <TaskInput addTask={addNewTask} />
            <div className="taskItems">
                {tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={() => dispatch(deleteTask(task.id))}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;

