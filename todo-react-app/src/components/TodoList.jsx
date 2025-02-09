import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([
  ]);

  const addTodo = (todo) => {

    if (todo.trim() === '') { //prüft ob todo leer ist oder nur Leerzeichen enthält
      return;
    }
    const newTodo = {
      id: todos.length + 1,
      text: todo,
      completed: false
    }
    setTodos([...todos, newTodo]);
    console.log("Todos:", todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <header className="rounded-t-lg bg-white p-4 shadow-md">
        <h3
          className="my-6 bg-gradient-to-r from-[#4158D0] to-[#C850C0] bg-clip-text text-center text-3xl font-bold text-transparent">

        </h3>
        <TodoForm addTodo={addTodo} />
      </header>
      <main className="bg-white p-4">
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-start border-t border-gray-300 py-2"
            >
              <TodoItem
                todo={todo}
                onToggleComplete={() => toggleComplete(todo.id)} // Übergabe der Toggle-Funktion
                onDelete={() => deleteTodo(todo.id)}        // Übergabe der Delete-Funktion
              />
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <p className="rounded-b-lg bg-white p-4 text-center text-sm text-gray-700 shadow-md">
          © 2024 Todo App -
        </p>
      </footer>
    </div>
  );
}

export default TodoList;