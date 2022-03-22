import React from "react";
import MobileBar from "../../layouts/purseLayout/components/MobileBar"

const PurseChat = ({theme, activeTab, setActiveTab}) => {
  return (
    <div className="w-full bg-dark-1 h-3/4 px-8">
      <MobileBar theme={theme} activeTab={activeTab} setActiveTab={setActiveTab} />
      <p className="md:text-8xl mt-8 text-4xl text-white-1">Purse chat page</p>
    </div>
  );
};

export default PurseChat;
