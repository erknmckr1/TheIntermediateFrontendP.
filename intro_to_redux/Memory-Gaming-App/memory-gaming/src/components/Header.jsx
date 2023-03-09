import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { shuffleCards } from '../redux/CardsSlice'
import './components.css'
function Header() {
    const dispatch = useDispatch()
   const point = useSelector(state=>state.cardsSlice.point)

   
  return (
    <div className='title'>
        <div className='header'>
        <h2>Football Player Match</h2>
        </div>
        <button onClick={()=>dispatch(shuffleCards())}>Start Match</button>
        <div>
            {point}
        </div>
    </div>
  )
}

export default Header