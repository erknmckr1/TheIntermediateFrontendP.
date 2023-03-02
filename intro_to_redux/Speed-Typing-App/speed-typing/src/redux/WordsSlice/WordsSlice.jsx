import { createSlice } from "@reduxjs/toolkit";
import randomWords from "random-words";
const wordsCount = 200;
// new Array(wordsCount).fill(null) ifadesi wordsCount degıskenınde belırtılen sayı kadar null deger tasıyan bır dızı olusturur. map() fonksıyonu her bır null degerı ıcın 'randomWords() fonsıyonunu cagırarak rastgele bır kelıme olusturur ve sonuc olarak yenı bır dızı doner. Bız fill(null)'de null'u map ıle dolasabılmek ıcın verdık.
const generateWords = () => {
  return new Array(wordsCount).fill(null).map(() => randomWords());
};

export const WordsSlice = createSlice({
  name: "wordSlice",
  initialState: {
    ınputValue: "",
    words: generateWords(),
    status: "waiting",
    timerDown: 60,
    correctWords: 0,
    inCorrectWords: 0,
    currentChar: "",
    currentWordIndex: 0,
    currentCharIndex: -1,
  },
  reducers: {
    startHandle: (state) => {
       // status finished oldugunda butun state'ler resetlencek. 
      if (state.status === "finished") {
        state.words=generateWords();
        state.correctWords = 0;
        state.inCorrectWords=0;
        state.currentChar ="";
        state.correctWords="";
        state.currentCharIndex = -1;
        state.currentWordIndex = 0;
        
      }
      if (state.status !== "started") {
        state.status = "started";
        
      }if (state.timerDown === 0) {
        state.status = "finished";
        state.ınputValue ="Time Over!";
        state.timerDown = 60;
      } else {
        state.timerDown -= 1;
      }
      
    },
    setInputValue:(state,action)=>{
        state.ınputValue =action.payload
    },
    keyDown: (state, action) => {
      const { keyCode, key } = action.payload;
      //keycode = 32 -> space
      if (keyCode === 32) {
        const wordToCompare = state.words[state.currentWordIndex];
        const doesItMatch = wordToCompare === state.ınputValue.trim();  // trim metodu bır dizenın basındakı ve sonundakı boslukları kaldırmak ıcın kullanılır. dizenın temız bır kopyasını dondurur.
        if (doesItMatch === true) {
          state.correctWords +=  1;
        } else {
          state.inCorrectWords += 1;
        }
        state.ınputValue = "";
        state.currentCharIndex = -1;
        state.currentWordIndex += 1;
        //backspace
      } else if (keyCode === 8) {
        state.currentCharIndex -= 1;
        state.currentChar = "";
      } else {
        state.currentCharIndex += 1;
        state.currentChar = key;
      }
    },
  },
});

export const { startHandle,setInputValue,keyDown } = WordsSlice.actions;
export default WordsSlice.reducer;
