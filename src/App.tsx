import "./App.css";
import { useEffect, useState } from "react";
import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";
import { useAppDispatch } from "./hooks";
import { FC } from "react";
import { fetchTodos } from "./store/TodoSlice";
import { addNewTodo } from "./store/TodoSlice";

const App: FC = () => {
  const [title, setTitle] = useState('');

  const dispatch = useAppDispatch();

  const handleAddTodo = (title: string) => {
    dispatch(addNewTodo(title));
    setTitle('');
  }

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  
  
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