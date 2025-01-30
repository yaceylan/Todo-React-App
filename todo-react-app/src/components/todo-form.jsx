import React, { useState } from 'react';

function TodoForm({ onTodoAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      onTodoAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Neues Todo hinzufügen"
      />
      <button type="submit">Hinzufügen</button>
    </form>
  );
}

export default TodoForm;