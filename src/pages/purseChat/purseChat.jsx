
import { useWeb3React } from "@web3-react/core";
import { ChatEngine, Socket } from 'react-chat-engine';
import './style.css'
import './all.css'
const PurseChat = ({chatId}) => {
 const  {account} = useWeb3React();
 const member  = account;
  return (
    <div className="chat-container">
      <span className='chatPic'><i className='fas fa-users'></i></span>
      <ChatEngine
      projectID='21f51b31-abf1-4e3e-9ed4-00a1b0215871'
      userName={account}
      userSecret={account}
     />
    </div>
  );
};

export default PurseChat;
