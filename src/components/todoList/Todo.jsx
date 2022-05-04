import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { BsCheck } from 'react-icons/bs';

import './TodoList.css';

const Todo = ({ text, todo, setTodos, todos }) => {
  const deleteItemHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map(item => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className="todo__item">
        <div>
          <div
            onClick={completeHandler}
            className={`circle ${todo.completed ? 'completed' : ''}`}
          >
            {todo.completed ? <BsCheck className="check" /> : <></>}
          </div>
          <p className={`${todo.completed ? 'todo__text' : ''}`}>{text}</p>
        </div>
        <BsFillTrashFill onClick={deleteItemHandler} className="trash__icon" />
      </li>
      {/* <button className="complete-btn"></button>
      <button className="trash-btn"></button> */}
    </div>
  );
};

export default Todo;
