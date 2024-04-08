import "./App.css";
import { useState } from "react";
import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodos = () => {
    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        text,
        completed: false,
      }
    ]);
    setText('');
  }

  const toggleTodo = (todoId) => {
    setTodos(todos.map((todo) => todo.id === todoId ? {...todo, completed: !todo.completed} : todo ));
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId))
  }


  return (
    <div className="App">
      <InputField 
        text={text}
        addTodos={addTodos}
        setText={setText}
      />

      <TodoList
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        todos={todos}
      />

    </div>
  );
}

export default App; 