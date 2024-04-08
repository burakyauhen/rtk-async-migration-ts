const InputField = ({text, addTodos, setText}) => {
    return (
        <label>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => addTodos()}>Add todo</button>
      </label> 
    );
} 

export { InputField }