import ChatForm from "./ChatForm";
import ChatList from "./ChatList";
import styles from "./styles.module.css";
import { init, subsMessage,subsInıtıalMessage } from "../socketApi";
import { useEffect } from "react";
import { useChat } from "../context/ChatContext";

function Container() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();
    subsMessage((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    });
    subsInıtıalMessage((messages) => setMessages(messages));
  }, []);
  return (
    <div className={styles.container}>
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
