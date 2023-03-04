import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getText, addParas, changeFormat } from "./redux/TextGenerateSlice/GenerateSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const paragraph = useSelector((state) => state.textGenerate.paragraphs);
  
  const paras = useSelector((state) => state.textGenerate.paras);
  const format = useSelector((state) => state.textGenerate.format);

  useEffect(() => {
    dispatch(getText({ paras: paras, format: format }));
  }, [paras, format, dispatch]);

  const handleChangeParas = (e) => {
    dispatch(addParas(e.target.value));
  };
  const handleFormatChange = (event)=>{
    const newFormat = event.target.checked ? 'html' : 'text';
    dispatch(changeFormat(newFormat))
  }
  // Mevcut text'ı kullanıcı panosuna kopyaladık.. navigator nesnesı web apılerle etkılesım kurmak ıcınde kullanılır. istek vs.
  const handleCopy = () =>{
    navigator.clipboard.writeText(paragraph)
  }
  return (
    <div className="App container mt-5">
      <h1 className="border-bottom border-3 pb-3 text-white fw-bold  ">Text Generate App</h1>
      <header className="row d-flex flex-column align-items-center justify-content-center mt-5">
        <form className="col-6 d-flex align-items-center justify-content-center gap-3 ">
          <div className=" p-2 boxSize col-4 d-flex flex-column align-items-center justify-content-evenly">
            <span>Paragraph Count</span>
            <input
              onChange={handleChangeParas}
              value={paras}
              type="number"
              className="form-control"
            />
          </div>
          <div className="p-2 boxSize col-4 d-flex flex-column align-items-center justify-content-between form-switch">
            <span>Include HTML</span>
            <input
              className="form-check-input mb-2"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={handleFormatChange}
              checked={format === 'html'}

            />
          </div>
          <div className=" boxSize col-4 d-flex flex-column align-items-center justify-content-evenly  ">
            <button type="button" className=" copyBtn  btn btn-primary rounded-pill " onClick={handleCopy}>
              Copy Paragraph
            </button>
          </div>
        </form>
      </header>
      <section>
        <div className="row">
          <div className="col-12 card p-5 section overflow-auto">
            <div className="paragraphDiv " >{paragraph.map((item)=>item)}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
