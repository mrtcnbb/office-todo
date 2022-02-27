import React from 'react';

function SubList({ subTodo }) {
  return (
    <div>
      {subTodo.map((item, index) => {
        return (
          <div key={index}>
            <p>{item}</p>
            <select name="city" id="city" placeholder="Choose city">
              <option>todo</option>
              <option>in progress</option>
              <option>done</option>
            </select>
            <button>Status ekle</button>
          </div>
        );
      })}
    </div>
  );
}

export default SubList;
