import "./App.css";
import { useState } from "react";
import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";
import { todoAdded } from "./store/TodoSlice";
import { useDispatch } from "react-redux"

const App = () => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  // const addTodos = () => {
  //   setTodos([
  //     ...todos,
  //     {
  //       id: new Date().toISOString(),
  //       text,
  //       completed: false,
  //     }
  //   ]);
  //   setText('');
  // }

  const handleAddTodo = (title) => {
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