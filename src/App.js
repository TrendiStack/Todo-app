import React, { useState, useEffect } from 'react';
import Form from './components/form/Form';
import { BsFillSunFill } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';
import TodoList from './components/todoList/TodoList';
import lightHeader from './assets/Bitmap.png';
import darkHeader from './assets/Bitmap@2x.png';

import './App.css';
import './index.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filterTodo, setFilterTodo] = useState([]);
  const [theme, setTheme] = useState('theme' ? 'dark' : 'light');
  const [toggle, setToggle] = useState('toggle' ? '75%' : '0%');
  const handleToggle = () => {
    const newToggle = toggle === '0%' ? '60%' : '0%';
    setToggle(newToggle);
  };

  //Theme Handler
  const themeToggler = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  //Icon Theme handler
  const themeIcon =
    theme === 'light' ? (
      <BsMoonFill className="mode__icon" />
    ) : (
      <BsFillSunFill className="mode__icon" />
    );
  //Background image theme handler
  const themeBackground = theme === 'light' ? '#fafafa' : '#171823';

  //seperate useEffect so it only runs once
  useEffect(() => {
    //Get user local todos
    const getLocalTodos = () => {
      if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem('todos'));
        setTodos(todoLocal);
      }
    };
    getLocalTodos();
  }, []);

  useEffect(() => {
    //Todo organizer
    const filterHandler = () => {
      switch (status) {
        case 'Completed':
          setFilterTodo(todos.filter(todo => todo.completed));
          break;
        case 'Active':
          setFilterTodo(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilterTodo(todos);
          break;
      }
    };
    //Save the Todos locally
    const saveLocalTodos = () => {
      if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]));
      } else {
        localStorage.setItem('todos', JSON.stringify(todos));
      }
    };

    filterHandler();
    saveLocalTodos();
  }, [status, todos]);

  return (
    <>
      <img
        className="image"
        src={theme === 'light' ? lightHeader : darkHeader}
        alt="alt"
      />

      <div className="App" data-theme={theme}>
        <div className="main__container">
          <header>
            <h1>TODO </h1>
            <div className="theme__container">
              <div
                onClick={() => {
                  handleToggle();
                  themeToggler();
                }}
                className="toggle__container"
              >
                <div
                  style={{ left: `${toggle}` }}
                  className="toggle__ball"
                ></div>
              </div>
              {themeIcon}
            </div>
          </header>
          <Form
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setStatus={setStatus}
            filterTodo={filterTodo}
          />
          <style>{`body { background-color: ${themeBackground} }`}</style>
          <style>{`body { transition: all 400ms ease }`}</style>
        </div>
      </div>
    </>
  );
}

export default App;
