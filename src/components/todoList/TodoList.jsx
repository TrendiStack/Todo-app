import React from 'react';
import Todo from './Todo';

import './TodoList.css';

const TodoList = ({ todos, setTodos, setStatus, filterTodo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter(todo => todo.completed !== true));
  };

  const statusHandler = e => {
    setStatus(e.target.innerText);
  };

  return (
    <div className="todo__container">
      <ul className="todo__list">
        {filterTodo.map(todo => (
          <Todo
            setTodos={setTodos}
            key={todo.id}
            todo={todo}
            todos={todos}
            text={todo.text}
          />
        ))}
      </ul>
      <div className="todo__options">
        <small>{todos.length} items</small>
        <div onClick={statusHandler} className="todo__state">
          <small>All</small>
          <small>Active</small>
          <small>Completed</small>
        </div>

        <small onClick={deleteHandler} className="clear__btn">
          Clear Completed
        </small>
      </div>
    </div>
  );
};

export default TodoList;
