import { useContext } from "react";
import { createContext , useState } from "react";

const ChatContext = createContext()

 export const ChatProvider = ({children}) =>{ 

    const [messages,setMessages] = useState([
       
    ]) ;// mesajlarımın olacagı dizi 
    
    const values = {
        messages,
        setMessages
    };

    return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>

}

export const useChat = ()=> useContext(ChatContext)