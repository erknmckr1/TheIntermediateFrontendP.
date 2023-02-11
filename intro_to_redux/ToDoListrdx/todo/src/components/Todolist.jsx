import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggle,
  destroy,
  selectFilteredTodos,
  getTodosAsync,
} from "../redux/todos/todosSlice";
import Loading from "./Loading";
import Error from "./Error";

function Todolist() {
  const filtered = useSelector(selectFilteredTodos);
  const dispatch = useDispatch();
  const isLoading = useSelector((state)=>state.todos.isLoading);
  const error = useSelector((state)=>state.todos.error)

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(destroy(id));
    }
  };

  if(isLoading){
    return <Loading/>
  }
  if(error){
    return <Error message={error}/>
  }
  
  return (
    <ul className="todo-list">
      {filtered.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              checked={item.completed}
              onChange={() => {
                dispatch(toggle({ id: item.id }));
              }}
              type="checkbox"
              className="toggle"
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => {
                handleDestroy({ id: item.id });
              }}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Todolist;
