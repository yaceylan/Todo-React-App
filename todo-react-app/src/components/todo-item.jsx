import React from "react";

function TodoItem({ todo, onTodoToggle, onTodoDelete }) { // "props" (Eigenschaften), die an die Komponente übergeben werden. todo enthält die Daten für ein einzelnes Todo-Element
  return (
    <li>
      <input
        type="checkbox" // Kontrollkästchen um Erledigtes zu markieren
        checked={todo.completed}
        onChange={() => onTodoToggle(todo.id)} // wenn sich Zustand des Kontrollkästchens ändert
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onTodoDelete(todo.id)}>Löschen</button>
    </li>
  );
}

export default TodoItem;