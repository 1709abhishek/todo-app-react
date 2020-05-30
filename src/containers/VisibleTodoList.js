import { connect } from "react-redux";
import { toggleTodo, toggleInProgress, toggleAbandon } from "../actions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case VisibilityFilters.SHOW_INPROGRESS:
            return todos.filter(t => t.inProgress);
        case VisibilityFilters.SHOW_ABANDON:
            return todos.filter(t => t.abandon);
        default:
            throw new Error("Unknown filter: " + filter);
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    toggleInProgress: id => dispatch(toggleInProgress(id)),
    toggleAbandon: id => dispatch(toggleAbandon(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
