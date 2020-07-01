import React, { useState } from "react";
import Todo from "./components/Todo";
import FormItem from "./components/FormItem";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { text: "this is todo app", isCompleted: false },
    { text: "Learning Reactjs", isCompleted: false },
    { text: "This is useState", isCompleted: false },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const completedTodo = [...todos];
    completedTodo[index].isCompleted = true;
    setTodos(completedTodo);
  };

  const removeTodo = (index) => {
    const removedTodo = [...todos];
    removedTodo.splice(index, 1);
    setTodos(removedTodo);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
            index={index}
            key={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <FormItem addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
