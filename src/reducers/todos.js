const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                    inProgress: false,
                    abandon: false
                }
            ];
        case "TOGGLE_TODO":
            return state.map(todo =>
                todo.id === action.id
                    ? {
                        ...todo,
                        completed: !todo.completed,
                        abandon: false,
                        inProgress: false
                    }
                    : todo
            );
        case "TOGGLE_INPROGRESS":
            return state.map(todo =>
                todo.id === action.id
                    ? {
                        ...todo,
                        inProgress: !todo.inProgress,
                        abandon: false,
                        completed: false
                    }
                    : todo
            );
        case "TOGGLE_ABANDON":
            return state.map(todo =>
                todo.id === action.id
                    ? {
                        ...todo,
                        abandon: !todo.abandon,
                        inProgress: false,
                        completed: false
                    }
                    : todo
            );
        default:
            return state;
    }
};

export default todos;
