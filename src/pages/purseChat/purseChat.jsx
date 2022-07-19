import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine'
import { Link, useParams } from "react-router-dom";
import './style.css'
import './all.css'
import usePurse from "../../web3/hooks/usePurse";
import axios from "axios";
const PurseChat = () => {
const {getChatId } = usePurse()
const  {account, active} = useWeb3React();
const [chatId, setChatId] = useState(null);
const [key, setKey] = useState(null) 
const {id} = useParams();

const exec = async() =>{
   const purseChatId = await getChatId(id);
   setChatId(purseChatId)

   if(chatId !== null || chatId !== 'null'){
    const getOrCreateChat = {
      method: 'get',
      url: `https://api.chatengine.io/chats/${purseChatId}/`,
      headers: {
       'PRIVATE-KEY': '19fe93ef-efc1-4cd9-99e1-c8fd79f9b2e1',
       'User-Name': account,
       'User-Secret': account
      },
     } 
    axios(getOrCreateChat)
    .then(
      res=>{
        if(res.status === 200 || res.status === 201){
          setKey(res.data.access_key)
        }
      }
    )
   }
}

useEffect(() => {
  if (!active) return;
  exec();
}, );
 return(
   <>
  {
   key? <div className = "chat-container">
    <span className='chatPic hidden-xs'><i className="fas fa-users"></i></span>
     <Link to={`/app/purse/${id}`}><span className='chatPic hidden-lg'><i className="fas fa-arrow-left"></i></span></Link>
       <ChatEngineWrapper>
       <ChatSocket 
        projectID='21f51b31-abf1-4e3e-9ed4-00a1b0215871'
        chatID={chatId}
        chatAccessKey={key}
        senderUsername={account}
       />
      <ChatFeed activeChat={`${chatId}`} />
     </ChatEngineWrapper>
  </div> : <div className="wait"><span>Please Wait.. <i className="fas fa-spinner fa-pulse"></i></span></div>
  }
 </>
);
}

export default PurseChat;