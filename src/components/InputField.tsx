import { FC } from "react";

type InputFieldProps = {
  title: string,
  handleAddTodo: (title: string) => void,
  setTitle: (title: string) => void,
}

const InputField: FC<InputFieldProps> = ({title, handleAddTodo, setTitle}) => {
    return (
        <label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={() => handleAddTodo(title)}>Add todo</button>
      </label> 
    );
} 

export { InputField }