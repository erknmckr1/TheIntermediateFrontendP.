import React from 'react'
import { useState } from 'react';
import './footer.css';
function Footer({ tasks, setTask }) {
    const [selected,setSelected] = useState({id:'all'})

    const showAllTask = () => {
        setTask(task=>task.map((item)=>{
            item.isVisible = true
            return item
        }));
        setSelected({id:'all'});
    }

    const activeTask = () =>{
        setTask(task=>task.map((item)=>{
            item.isCompleted ? item.isVisible = false : item.isVisible = true
            return item
        }));
        setSelected({id:'active'});
    }
    const completedTask = () =>{
        setTask(task=>task.map((item)=>{
            item.isCompleted ? item.isVisible = true : item.isVisible = false
            return item
        }))
        setSelected({id:'completed'})
    }
    const clearCompletedTask = () =>{
        setTask(task=>task.filter(item=>{
            return !item.isCompleted
        }))
        setSelected({id:'clear'})
    }
    
    return (
        <footer className='footer' hidden={tasks.length === 0}>
            <span className='todo-count'>
                <strong>{tasks.length}</strong> items left
            </span>
            <ul className='filters'>
                <li>
                    <a  onClick={showAllTask} className={selected.id='all' ? selected : ''} href='#/'>All</a>
                </li>
                <li>
                    <a onClick={activeTask} className={selected.id='active' ? selected : ''} href='#/'>Active</a>
                </li>
                <li>
                    <a onClick={completedTask} className={selected.id='completed' ? selected : ''} href='#/'>Completed</a>
                </li>
                <li className='clear-completed'>
                    <button onClick={clearCompletedTask} className="clear-completed">Clear Completed</button>
                </li>



            </ul>
        </footer>
    )
}

export default Footer