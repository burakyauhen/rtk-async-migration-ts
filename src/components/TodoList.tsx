import { TodoItem } from "./TodoItem";
import { useAppSelector } from "../hooks";
import { FC } from "react";

const TodoList: FC = () => {
    const todos = useAppSelector(state => state.todos.value);
    const { error, loading} = useAppSelector(state => state.todos)
    console.log(loading);

    {loading && <h1>data is loading...</h1>}

    return (
        <>
            {loading && <h1>data is loading...</h1>}
            {error && <h1>{error}</h1>}

            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                />
            ))}
        </>
        
    );
}

export { TodoList }