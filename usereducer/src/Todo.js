import React from "react";
import { ACTIONS } from "./App";

const Todo = ({ todo, dispatch }) => {
  return (
    <>
      <span style={{ color: todo.complete ? "green" : "red" }}>
        {todo.task}
      </span>
      <button
        onClick={() => {
          return dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { id: todo.id },
          });
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          return dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { id: todo.id },
          });
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Todo;
