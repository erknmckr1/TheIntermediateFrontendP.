
import { useEmoji } from "../../context/EmojiContext";
import  "./search.css"
function Search() {
  const { inputText, setInputText } = useEmoji();
  return (
    <div className="search_Div">
      <div className="title_div">
      <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          width="32"
          height="32"
          alt="grin-cat"
        />
      <span className="title_text">Emoji Search</span>
      <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
          width="32"
          height="32"
          alt="grinning-cat"
        />
      </div>
      
      <input
        placeholder="Search emoji"
        className="search_ınput"
        value={inputText}
        type="text"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
