import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {helpUser} from '../redux/MarkdownSlice'

function Header() {
    const dispatch = useDispatch()
    const help = useSelector((state)=>state.markdown.isHelpOkey)

  return (
    <div className='header'>
        <div className={` ${help ? 'help-button2 help-button' : "help-button"}`}onClick={()=>{dispatch(helpUser())}}>
            ?
        </div>
        <h1 className='title'>Markdown Prewiev</h1>
        
    </div>
  )
}

export default Header