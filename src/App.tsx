import "./App.css";
import { useState } from "react";
import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";
import { todoAdded } from "./store/TodoSlice";
import { useAppDispatch } from "./hooks";
import { FC } from "react";

const App: FC = () => {
  const [title, setTitle] = useState('');

  const dispatch = useAppDispatch();

  const handleAddTodo = (title: string) => {
    dispatch(todoAdded(title));
    setTitle('');
  }


  
  return (
    <div className="App">
      <InputField 
        title={title}
        handleAddTodo={handleAddTodo}
        setTitle={setTitle}
      />

      <TodoList />

    </div>
  );
}

export default App; 