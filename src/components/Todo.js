import React from "react";
import PropTypes from "prop-types";

const Todo = ({
    abandonTask,
    handleProgress,
    onClick,
    completed,
    text,
    inProgress,
    abandon
}) => (
        <div className="todo-list">
            <div>
                <span
                    className="todo-comp"
                    onClick={onClick}
                    style={{
                        textDecoration: completed ? "line-through" : "none"
                    }}
                >
                    {text}
                </span>
            </div>
            <div>
                <label className="container">
                    <input type="checkbox" onClick={handleProgress} checked={inProgress} />
                    <span className="checkmark">Progress</span>
                </label>
                <label className="container">
                    <input type="checkbox" onClick={abandonTask} checked={abandon} />
                    <span className="checkmark">Abandon</span>
                </label>
            </div>
        </div>
    );

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    handleProgress: PropTypes.func.isRequired,
    abandonTask: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;
