import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, toggleInProgress, toggleAbandon }) => (
    <ul>
        {todos.map(todo => (
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
                handleProgress={() => toggleInProgress(todo.id)}
                abandonTask={() => toggleAbandon(todo.id)}
            />
        ))}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            inProgress: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
            abandon: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    toggleInProgress: PropTypes.func.isRequired,
    toggleAbandon: PropTypes.func.isRequired
};

export default TodoList;
