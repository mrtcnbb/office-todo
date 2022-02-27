import React, { useState } from 'react';

function Form({ setTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo((prevTodo) => [...prevTodo, inputValue]);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input id="Todo" type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
      <button id="addTodo">Ekle</button>
    </form>
  );
}

export default Form;
