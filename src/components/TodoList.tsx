import { TodoItem } from "./TodoItem";
import { useAppSelector } from "../hooks";
import { FC } from "react";

const TodoList: FC = () => {
    const todos = useAppSelector(state => state.todos.value);
    return (
        todos.map((todo) => (
            <TodoItem
                key={todo.id}
                {...todo}
            />
        ))
    );
}

export { TodoList }