import { useDispatch } from "react-redux";
import { todoDeleted, todoToggled } from "../store/TodoSlice";

const TodoItem = ({ title, id, completed }) => {
    const dispatch = useDispatch();
    return (
        <li>
            <input type="checkbox" checked={completed} onChange={() => dispatch(todoToggled(id))} />
            <span>{title}</span>
         <span className="delete" onClick={()=> dispatch(todoDeleted(id))} >&times;</span>
        </li>    

    );
}

export { TodoItem }