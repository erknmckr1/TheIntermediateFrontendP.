import React from 'react'
import { useState } from 'react'
import './header.css'
function Header({tasks,setTask}) {
    const initialInputValues = "" // todo state inin baslangıc degerı.. 

    
    const [todo,setTodo] = useState(initialInputValues)
    // ınputa her yazdıgımız karakterı todo state ıne  kaydedecek fonksıyon
    const handleChangeInput = (e) => {
        setTodo(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(todo==="" ) return false
        const value = {name:todo, isCompleted: false, isVisible: true, isEditing: false}
        setTask([...tasks,value])
        setTodo(initialInputValues)
    }
  return (
    <header className='header'>
              <h1>todolist</h1>
        <form onSubmit={onSubmit}>
            <input onChange={handleChangeInput} className='new-todo' value={todo} type="text" placeholder="What needs to be done?"/>
        </form>
    </header>
  )
}

export default Header