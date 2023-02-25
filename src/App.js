import './App.css';
import React, { useState } from 'react';
import AddToDo from './Components/AddToDo';
import TodoItem from './Components/TodoItem';

function App() {
  const [todo, setTodo] = useState([])

  const getItem = (item) => {
    setTodo((prevState) => {
      return [...prevState, item]
    })
  }
  const getCompleted = (id) => {
    setTodo((prevState) => {
      return prevState.filter((item, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>My to do list</h1>
        <AddToDo item={getItem} />
      </header>
      <main className="App-main">
        {todo && todo.map((todo, index) => (
          <TodoItem id={index} item={todo} completed={getCompleted} />
        ))}
      </main>
    </div>
  );
}

export default App;
