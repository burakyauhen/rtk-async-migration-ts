const InputField = ({title, handleAddTodo, setTitle}) => {
    return (
        <label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={() => handleAddTodo(title)}>Add todo</button>
      </label> 
    );
} 

export { InputField }