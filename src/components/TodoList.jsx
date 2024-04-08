import { TodoItem } from "./TodoItem";

const TodoList = ({ todos, toggleTodo, removeTodo}) => {
    return (
        todos.map((todo) => (
            <TodoItem
                key={todo.id}
                todo={todo}
                handleToggle={toggleTodo}
                handleRemove={removeTodo}
            />
        ))
    );
}

export { TodoList }