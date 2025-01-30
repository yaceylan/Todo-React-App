import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onTodoToggle, onTodoDelete }) { //  Funktion, die aufgerufen wird, wenn der Benutzer den Status eines Todos ändert (
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} // um die Elemente in der Liste effizient zu aktualisieren
          todo={todo} // todo-Objekt wird an die TodoItem-Komponente übergeben, damit diese das Todo anzeigen kann
          onTodoToggle={onTodoToggle} // damit Funktion aufgerufen werden kann, wenn Benutzer den Status eines Todos ändert
          onTodoDelete={onTodoDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;