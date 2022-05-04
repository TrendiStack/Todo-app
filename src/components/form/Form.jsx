import React from 'react';

import './Form.css';

const Form = ({ todos, setTodos, inputText, setInputText }) => {
  const inputHandler = e => {
    setInputText(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText('');
  };
  return (
    <form action="" className="todo__form">
      <input
        value={inputText}
        onChange={inputHandler}
        type="text"
        className="todo__input"
        placeholder="Create a new task"
      />
      {/* <div>
        <select name="todos" className="filter__todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div> */}
      <button type="submit" className="todo__button" onClick={submitHandler}>
        submit
      </button>
    </form>
  );
};

export default Form;
