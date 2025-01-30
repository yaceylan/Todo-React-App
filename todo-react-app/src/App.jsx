import { useState } from 'react'
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleTodoAdd = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const handleTodoToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleTodoDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (

    <div>
      <h1>Todo-App</h1>
      <TodoForm onTodoAdd={handleTodoAdd} />
      <TodoList
        todos={todos}
        onTodoToggle={handleTodoToggle}
        onTodoDelete={handleTodoDelete}
      />
    </div>
  );
}

export default App;



