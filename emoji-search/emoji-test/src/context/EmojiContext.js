import { createContext, useContext, useState } from "react";
import emojiList from "../data/emojiList.json";
const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [emojies, setEmojies] = useState(emojiList);
  
  const values = {
    inputText,
    setInputText,
    emojies,
    setEmojies
  };

  return (
    <EmojiContext.Provider value={values}>{children}</EmojiContext.Provider>
  );
};

export const useEmoji = () => useContext(EmojiContext);
