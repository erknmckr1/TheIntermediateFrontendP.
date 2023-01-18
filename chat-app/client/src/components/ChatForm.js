import React from 'react'
import { useState } from 'react'
import { sendMessage } from '../socketApi'
import styles from './styles.module.css'
import { useChat } from "../context/ChatContext";
function ChatForm() {
const [message,setMessage] = useState("")
  const {setMessages} = useChat()

  const handleSubmit = (e)=>{
    e.preventDefault()
    sendMessage(message) // submit oldugunda mesaj backendeee
    setMessages((prevState) => [...prevState, {message, fromMe : true}]) // önceki state i aldık ve üstüne yenı mesajı ekledık. 
    setMessage("")
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input onChange={(e)=>{setMessage(e.target.value)}} className={styles.textInput} type="text" value={message} placeholder="Write something" />
      </form>
    </div>
  )
}

export default ChatForm