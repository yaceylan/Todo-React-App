import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const handleTodoAdd = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false },
    ]);
  };

  return (
    <div>
      <TodoForm onTodoAdd={handleTodoAdd} />
    </div>
  );
}

export default App;