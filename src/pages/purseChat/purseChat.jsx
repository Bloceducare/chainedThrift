
import { ChatEngine } from 'react-chat-engine';

const PurseChat = ({id, walletID}) => {
  return (
    <div className="w-full">
      {/* <p className="md:text-8xl mt-8 text-2xl text-dark-1 dark:text-white-1">Coming soon...</p> */}
      <ChatEngine
       height='100vh'
			 projectID={process.env.REACT_APP_PROJECT_ID}
			 userName={walletID}
		 	 userSecret={walletID}
		/>
    </div>
  );
};

export default PurseChat;
