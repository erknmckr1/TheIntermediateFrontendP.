import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";
import {nanoid} from "@reduxjs/toolkit"
function Form() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: nanoid(4), title , completed: false }));
    setTitle("")
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done ?"
        autoFocus
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    </form>
  );
}

export default Form;
