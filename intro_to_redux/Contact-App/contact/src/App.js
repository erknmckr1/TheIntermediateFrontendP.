import Page from "./components/Page";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashCanArrowUp } from "@fortawesome/free-solid-svg-icons";
import Edit from "./components/Edit/Edit";
library.add(faTrashCanArrowUp);
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Page/>} />
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
