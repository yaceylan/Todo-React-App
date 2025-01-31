import React from "react";

function TodoItem({ todo, onToggleComplete, onDelete }) {
  return (
    <li className="flex items-center justify-between border-b py-2">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          className="cursor-pointer"
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.text}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)} className="text-red-500 font-bold hover:text-red-700 transition duration-200">
      </button>
    </li>
  );
}

export default TodoItem;