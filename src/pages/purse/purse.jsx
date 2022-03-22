import React from "react";
import LisplayBox from "../../layouts/purseLayout/components/listDisplayBox";
import Details from "./components/Details";
import MobileBar from "../../layouts/purseLayout/components/MobileBar"

const Purse = ({theme, activeTab, setActiveTab}) => {
  return (
    <div className={`w-full ${theme === 'dark'? 'bg-dark-1': 'bg-white-1'} h-3/4 text-white-1 px-8`}>
      <LisplayBox theme={theme} />
      <MobileBar theme={theme} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Details theme={theme} />
    </div>
  );
};

export default Purse;