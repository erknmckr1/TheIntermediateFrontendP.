import React, { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { startHandle,setInputValue,keyDown } from "../../redux/WordsSlice/WordsSlice";
function StartingPart() {
  const dispatch = useDispatch();

  const { words,timerDown,status,ınputValue,currentCharIndex,currentWordIndex,currentChar } = useSelector((state) => state.wordSlice);
  
 const handleStart = useCallback(() => {
    dispatch(startHandle());
}, [ dispatch]);

useEffect(() => {
    if(status === "started") {
        setTimeout(() => { handleStart() }, 1000);
    }
}, [timerDown, status, handleStart]);


const handleKeyDown = (event)=>{
  dispatch(keyDown({key: event.key,keyCode:event.keyCode}))
}
const getCharClass = (wordIdx,charIdx,char)=>{
  if(wordIdx===currentWordIndex && charIdx===currentCharIndex && currentChar && status !== "finished"){
    if(currentChar === char){
      return "bg-success p-1 fs-bold"
    }else{
      return "bg-danger"
    }
  }
}

const getWordsClass = (word,wordIdx)=>{
  console.log() 
if( wordIdx===currentWordIndex && word && status !== "finished" ){

  if(word===words[currentWordIndex]){
    return "bg-secondary text-white fs-4"
  }
  
    
  
}
}
  return (
    <div className="container">
      <section className="row mt-5">
        <div className="col-12 card">
           {/* Words dızısındeki her kelimenin her harfini ayrı ayrı bir span olarak ekrana yazdırdık. once kelımeyı aldık map fonksiyonu, dizi içindeki her elemanı döndürür ve bu kod bloğunda her kelime, bir span etiketi içinde yazdırılır. Ardından, her harf, yine ayrı ayrı bir span etiketi içinde yazdırılır ve her kelimenin sonuna bir boşluk (<span> </span>) eklenir. Her harfa ayrı ayrı class ekleyebılmek ıcın   */}
          <div className="card-body">
            {words.map((word, i) => (
              <span className={getWordsClass(word,i)} key={i}>
                {word.split("").map((char, idx) => (
                  <span className={getCharClass(i,idx,char)} key={idx}>
                    {char}
                  </span>
                ))}
                <span> </span>
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="row d-flex align-items-center ">
        <div className="col-6">
          <div className="input-group mt-5  ">
            <input 
              type="text"
              className="form-control"
              disabled={status !=="started"}
              value={ınputValue}
              onChange={(e) => {
                dispatch(setInputValue(e.target.value))
              }}
              onKeyDown={handleKeyDown}
             
              placeholder="Hurry Up!"
            />
          </div>
        </div>
        <div className="col-6 mt-5 search_area">
          <div className="  d-flex justify-content-center">
            <button
              type="button"
              className="btn fs-5  rounded-pill p-3 text-black "
              onClick={handleStart}
            >
              Start
            </button>
            <span className="ms-5 fs-1 text-success fw-bold ">{timerDown}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StartingPart;
