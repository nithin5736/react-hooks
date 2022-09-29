import "./App.css";
import React, { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.task)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    default:
      return todos;
  }
}

function newTodo(task) {
  return { id: Date.now(), task: task, complete: false };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { task: task } });
    setTask("");
  };

  // console.log(todos);

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo index={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}

export default App;
