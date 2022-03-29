import React from "react";
import LisplayBox from "../../layouts/purseLayout/components/listDisplayBox";
import Deposit from "./components/Deposit";
import Vote from "./components/Vote";
import MobileBar from "../../layouts/purseLayout/components/MobileBar"

const PurseActions = ({theme, activeTab, setActiveTab}) => {
  return (
    <div className={`w-full ${theme === 'dark'? 'bg-dark-1' :'bg-white-1'} h-3/4 text-white-1 px-8`}>
      <LisplayBox theme={theme} />
      <MobileBar theme={theme} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Deposit theme={theme} />
      <Vote  theme={theme}/>

      {/* <!-- Create Purse Modal --> */}

    </div>
  );
};

export default PurseActions;
