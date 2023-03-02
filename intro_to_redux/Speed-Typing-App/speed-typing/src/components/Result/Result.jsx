import React from "react";
import { useSelector } from "react-redux";
function Result() {
  const { correctWords, inCorrectWords,status } = useSelector(
    (state) => state.wordSlice
  );
  return (
   <div>
      { status==="finished" && <div className="row  rounded mt-5 result">
        <div className="col-6 d-flex p-3 pt-5 pb-5   ">
            <div className="col-6 d-flex align-items-center">
                <span className="fs-5">Correct Words:</span>
                <span className="fs-2 fw-bold text-success"> {correctWords}</span>
            </div>
            <div className="col-6 d-flex align-items-center">
                <span className="fs-5">InCorrect Words:</span>
                <span className="fs-2 text-danger fw-bold">{inCorrectWords}</span>
            </div>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center">
            <span className="fs-5">Success Rate: </span>
            <span className="fs-2 fw-bold text-primary">{Math.round((correctWords/(correctWords+inCorrectWords)) *100)} %</span>
        </div>
      </div>}
    </div>

  );}


export default Result;
