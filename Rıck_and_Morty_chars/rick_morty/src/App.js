import {Routes,Route} from 'react-router-dom'
import './App.css';
import HomeLayout from './pages/Home/HomeLayout';
import Home from './pages/Home/Home';
import About from './pages/Episodes/Episodes';
import Detail from './pages/CharDetail/Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeLayout/>} >
          <Route index={true} element={<Home/>}/>
          <Route path='/detail/:charId' element={<Detail/>}/>
          <Route path='/episodes' element={<About/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
