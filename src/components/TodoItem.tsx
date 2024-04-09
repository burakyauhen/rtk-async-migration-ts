import { toggleStatus, deleteTodo } from "../store/TodoSlice";
import { useAppDispatch } from "../hooks";
import { FC } from "react";

type TodoItemProps = {
    title: string,
    id: string,
    completed: boolean,
}

const TodoItem: FC<TodoItemProps> = ({ title, id, completed }) => {
    const dispatch = useAppDispatch();
    return (
        <li>
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggleStatus(id))} />
            <span>{title}</span>
         <span className="delete" onClick={()=> dispatch(deleteTodo(id))} >&times;</span>
        </li>    

    );
}

export { TodoItem }