import { useWeb3React } from "@web3-react/core";
import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine'
import { Link } from "react-router-dom";
import './style.css'
import './all.css'
import { useEffect, useState } from "react";
const PurseChat = ({purseId}) => {
 const  {account} = useWeb3React();
 const chatId = localStorage.getItem(`${purseId}`); 
 const key = localStorage.getItem(`${purseId + 'KEY'}`); 
 return(
  <div className = "chat-container">
    <span className='chatPic hidden-xs'><i className="fas fa-users"></i></span>
   <Link to={`/app/purse/${purseId}`}><span className='chatPic hidden-lg'><i className="fas fa-arrow-left"></i></span></Link>
    <ChatEngineWrapper>
      <ChatSocket 
        projectID='21f51b31-abf1-4e3e-9ed4-00a1b0215871'
        chatID={`${chatId}`}
        chatAccessKey={`${key}`}
        senderUsername={`${account}`}
       />
      <ChatFeed activeChat={`${chatId}`} />
      </ChatEngineWrapper>
  </div>
);
}



export default PurseChat;