import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {changeActiveFilter,deletedCompleted} from "../redux/todos/todosSlice";
function ContentFooter() {
  const dispatch = useDispatch()

  const items = useSelector((state) => state.todos.items);
  const leftItems = items.filter((item) => !item.completed).length;


  const activeFilter = useSelector(state=>state.todos.active)
  

  
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftItems}</strong> item{leftItems>1 && 's'} left
      </span>
      <ul className="filters">
        <li>
          <a href="#/" className={activeFilter==='all' ? 'selected' : ''} onClick={()=>dispatch(changeActiveFilter('all'))}>
            All
          </a>
        </li>
        <li>
          <a href="#/" className={activeFilter==='active' ? 'selected' : ''} onClick={()=>dispatch(changeActiveFilter('active'))} >Active</a>
        </li>
        <li>
          <a href="#/" className={activeFilter==='completed' ? 'selected' : ''} onClick={()=>dispatch(changeActiveFilter('completed'))}>Completed</a>
        </li>
      </ul>
      <button className="clear-completed" onClick={()=>{dispatch(deletedCompleted())}}>Clear Completed</button>
    </footer>
  );
}

export default ContentFooter;
