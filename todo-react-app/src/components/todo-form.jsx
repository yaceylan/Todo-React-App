import React, { useState } from "react";
import TodoForm from "./components/todo-form";
import TodoList from "./components/todo-list";

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
                type="Text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add new Todo"
            />
            <button type="Submit">Add</button>
        </form>
    );
}

export default TodoForm;