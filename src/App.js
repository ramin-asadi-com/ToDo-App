import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button
          type="button"
          class="btn btn-info mr-2"
          onClick={() => completeTodo(index)}
        >
          <i class="fas fa-check" />
        </button>
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => removeTodo(index)}
        >
          <i class="fas fa-times" />
        </button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <input
          type="text"
          className="input"
          class="form-control"
          placeholder="Enter a Task"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Cook Dinner",
      isCompleted: false
    },
    {
      text: "Wash Dishes",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div class="container">
        <div class="card text-center w-50">
          <div class="card-header">To Do List</div>
          <li class="list-group-item list-group-item-info">
            <div class="card-body ml-4">
              <div className="todo-list">
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, index) => (
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                  />
                ))}
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}

export default App;
