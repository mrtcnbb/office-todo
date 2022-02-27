import React, { useState } from 'react';
import SubList from './SubList';

function List({ todo, setTodo }) {
  const [subTodoInput, setSubTodoInput] = useState('');
  const [subTodo, setSubTodo] = useState([]);

  const handleSubTodo = function (subTodo) {
    setSubTodo(subTodo);
  };

  const handleClick = (id) => {
    setTodo(todo.filter((item, index) => index !== id));
  };
  const handleSubListClick = () => {
    setSubTodo((prevSub) => [...prevSub, subTodoInput]);
    setSubTodoInput('');
    console.log(subTodo);
  };
  return (
    <div>
      {todo.map((item, index) => {
        return (
          <li key={index}>
            {item}
            <button onClick={() => handleClick(index)}>Sil</button>
            <input
              type="text"
              onChange={(e) => setSubTodoInput(e.target.value)}
              value={subTodoInput}
              placeholder="Sub Kategori Ekle"
            />
            <button onClick={handleSubListClick}>Sub kategori ekle</button>
            <SubList subTodo={subTodo} />
          </li>
        );
      })}
    </div>
  );
}

export default List;
