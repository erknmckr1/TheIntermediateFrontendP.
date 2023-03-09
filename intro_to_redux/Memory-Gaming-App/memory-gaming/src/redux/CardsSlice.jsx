import { createSlice } from "@reduxjs/toolkit";
import {cards} from '../data/data'
import { nanoid } from "@reduxjs/toolkit";

export const CardsSlice = createSlice({
    
    name:"cardsSlice",
    initialState:{
        chooseFirst:null,
        chooseSecond:null,
        cards:[],
        point:0,
        turn:0
        
    },
    reducers:{
        shuffleCards:(state)=>{
           const shuffleCards=[...cards,...cards]
            .sort(()=>Math.random() - 0.5)
            .map((card)=> ({...card,id:nanoid(),mached:false}))

            state.cards= shuffleCards;
            state.chooseFirst="";
            state.chooseSecond="";
            state.point=0;
            state.turn=0;
        },
        chooseCard: (state, action) => {
            if (state.chooseFirst && state.chooseSecond) {
              return state;
            }
            if (!state.chooseFirst) {
              state.chooseFirst = action.payload;
            } else {
              state.chooseSecond = action.payload;
            }
            return state;
          },
    matchedCard:(state,action)=>{
        const returnCard = ()=>{
            state.chooseFirst = null;
            state.chooseSecond = null;
            state.turn += 1;
        }
        if(state.chooseFirst && state.chooseSecond){
            if(state.chooseFirst.src === state.chooseSecond.src){
                state.point += 50;
                state.cards.map((card)=>{
                    if(card.src===state.chooseFirst.src){
                        return {...card,matched:true}
                    }
                    return card
                })
                returnCard()
            }else{
                state.point -= 10;
                setTimeout(()=>{
                    returnCard()
                },1000)
            }
        }
    }
    

        
    }
        
})

export default CardsSlice.reducer
export const {shuffleCards,chooseCard} = CardsSlice.actions
