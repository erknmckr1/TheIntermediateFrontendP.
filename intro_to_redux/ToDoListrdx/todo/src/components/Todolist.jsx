import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle, destroy,selectFilteredTodos } from "../redux/todos/todosSlice";


function Todolist() {
  const filtered = useSelector(selectFilteredTodos)
  const dispatch = useDispatch();

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(destroy(id));
    }
  };
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
