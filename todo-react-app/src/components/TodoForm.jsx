import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoText);
    setTodoText(""); // Eingabefeld leeren
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex justify-between">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        name="todo"
        placeholder="create new todo"
        id="todo-item"
        className="mr-3 w-full border p-2"
      />
      <button
        type="submit"
        className="bg-[#0093E9] px-4 py-2 font-semibold text-white"
      >
      </button>
    </form>
  );
}

export default TodoForm;