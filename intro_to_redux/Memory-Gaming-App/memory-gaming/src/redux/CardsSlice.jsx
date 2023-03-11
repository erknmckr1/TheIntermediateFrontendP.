import { createSlice } from "@reduxjs/toolkit";
import { cards } from "../data/data";
import { nanoid } from "@reduxjs/toolkit";


export const CardsSlice = createSlice({
  name: "cardsSlice",
  initialState: {
    chooseFirst: null,
    chooseSecond: null,
    cards: [],
    point: 0,
    turn: 0,
    isDisabled: false,
  },
  reducers: {
    shuffleCards: (state) => {
      const shuffleCards = [...cards, ...cards] // spread operator ıle datanın kopyasını alıp bır dızıde topladık
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: nanoid(), mached: false }));

      state.cards = shuffleCards;
      state.point = 0;
      state.turn = 0;
    },
    chooseCard: (state, action) => {
      if (state.chooseFirst && state.chooseSecond) {
        // 2 kartımızda secılı ıse state'ı oldugu gıbı donecegız. Eğer yoksa 1. kartı sonra 2. kartı sececegız.
        return state;
      }
      if (!state.chooseFirst) {
        state.chooseFirst = action.payload;
      } else {
        state.chooseSecond = action.payload;
      }
      return state;
    },
    matchedCard: (state) => {
      state.isDisabled = true;
      if (state.chooseFirst.src === state.chooseSecond.src) {
        state.point += 50;
        state.cards = state.cards.map((card) => {
          if (card.src === state.chooseFirst.src) {
            return { ...card, matched: true };
          }
          return card;
        });
        state.chooseFirst = null;
        state.chooseSecond = null;
        state.turn += 1;
        state.isDisabled = false;
      }else{
        state.point -= 10

      }
    },
    returnCard: (state) => {
      if(state.chooseFirst && state.chooseSecond)
      state.chooseFirst = null;
      state.chooseSecond = null;
      state.turn += 1;
      state.isDisabled = false;
      
    },
  },
});

export default CardsSlice.reducer;
export const { shuffleCards, chooseCard, matchedCard, returnCard } =
  CardsSlice.actions;
