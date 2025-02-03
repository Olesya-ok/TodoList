let initialState = {
    tasks: [{ id: 1, text: "first task", completed: false }],
    newTaskText: "",
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, { id: Date.now(), text: action.text, completed: false }]
            };

        case "DELETE_TASK":
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.id) };

        default:
            return state;
    }
};

export default postReducer;

