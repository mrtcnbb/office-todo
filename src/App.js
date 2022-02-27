import { useState } from 'react';
import './App.css';
import Form from './Form';
import List from './List';

function App() {
  const [todo, setTodo] = useState([]);

  const handleTodo = function (todo) {
    setTodo(todo);
  };

  return (
    <div className="App">
      <Form setTodo={handleTodo} />
      <List todo={todo} setTodo={handleTodo} />
    </div>
  );
}

export default App;
