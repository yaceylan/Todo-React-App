import React from 'react';

function TodoItem({ todo, onTodoToggle, onTodoDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onTodoToggle(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onTodoDelete(todo.id)}>Löschen</button>
    </li>
  );
}

export default TodoItem;