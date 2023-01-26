
import './App.css';
import EmojiList from './components/emojiLıst/EmojiList';
import Search from './components/search/Search';
import { EmojiProvider } from './context/EmojiContext';

function App() {

  return (
    <EmojiProvider>
    <div className="App">
     
      <Search/>
      <EmojiList/>
      
    </div>
    </EmojiProvider>
  );
}

export default App;
