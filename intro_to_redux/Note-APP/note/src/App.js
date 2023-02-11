import Header from './components/Header/Header';
import './App.css';
import NoteList from './components/NoteList/NoteList';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <NoteList/>
      <Footer/>
    </div>
  );
}

export default App;
