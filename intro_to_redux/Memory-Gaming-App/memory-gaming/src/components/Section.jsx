import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Card from './Card'
import { chooseCard} from '../redux/CardsSlice'
function Section() {
    const dispatch = useDispatch()
    
    const cards = useSelector((state)=>state.cardsSlice.cards)
   console.log(cards)
     const handleChoose = (card)=>{
     dispatch(chooseCard(card))
     }
  return (
    <div className='cards_table'>
        {cards.map((card)=>(
           <Card card={card} key={card.id} handleChoose={handleChoose}/>
        ))}
    </div>
  )
}

export default Section