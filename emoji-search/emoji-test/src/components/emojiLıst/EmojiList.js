import React, { useState } from "react";
import { useEmoji } from "../../context/EmojiContext";
import "./emojiLİst.css";
function EmojiList() {
  const { emojies, inputText } = useEmoji();
  const [active,setActive] = useState(null)

  const handleClick = (index)=>{
    setActive(index)
  }

  // datayı ınputa yazdıgımız verıye gore lısteleyelım. 
  const filteredEmoji = emojies.filter((item) => {
    return item.keywords.toLowerCase().includes(inputText.toLowerCase());
  });

  return (
    <div className="listDiv">
      <ul className="list">
        {filteredEmoji.map((item, index) => {
          return (
            <li id={index} key={index}  className={`list_item ${active === index ? 'selected' : "" }`}>
              <div className="emojiDiv" >
                <span className="symbol">{item.symbol}</span>
                <span className="title">{item.title}</span>
              </div>
              <span
               onClick={() => {
                handleClick(index)
                navigator.clipboard.writeText(item.symbol);
               }}
                className="copy"
              >
                Click to copy emoji
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EmojiList;
