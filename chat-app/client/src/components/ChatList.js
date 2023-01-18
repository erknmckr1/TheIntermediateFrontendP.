import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useChat } from "../context/ChatContext";
import Chatİtem from "./Chatİtem";
import styles from "./styles.module.css";

function ChatList() {
  const { messages } = useChat();
  const [chatRef, setChatRef] = useState(null)
  useEffect(()=>{
    if (chatRef) {
      chatRef.scrollTop = chatRef.scrollHeight;
  }
  },[messages,chatRef])
  console.log(messages)
  return (
    <div className={styles.chatlist}>
      <div ref={(elem) => setChatRef(elem)} >
      {messages.map((item, key) => (
					<Chatİtem key={key} item={item} />
				))}
      </div>
    </div>
  );
}

export default ChatList;
