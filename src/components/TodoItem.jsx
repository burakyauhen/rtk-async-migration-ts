const TodoItem = ({todo, handleToggle, handleRemove }) => {
    return (
        <li>
        <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)} />
        <span>{todo.text}</span>
        <span className="delete" onClick={()=> handleRemove(todo.id)} >&times;</span>
      </li>    

    );
}

export { TodoItem }