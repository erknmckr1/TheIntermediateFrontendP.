import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle, destroy } from "../redux/todos/todosSlice";

let filtered = [];
function Todolist() {
  const items = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.todos.active);
  

   
  filtered = items;
  // active state'i all degıl ise asagıdaki şart blogu uygulanacak active statini ContentFooter kısmında guncellıyorduk ona gore ekrana gelecek. 
  if (activeFilter !== "all") {
    filtered=items.filter((todo) => {
      return activeFilter === "active"
        ? todo.completed === false 
        : todo.completed === true ;
    });
  }

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
