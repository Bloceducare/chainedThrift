import React from "react";
import LisplayBox from "../../layouts/purseLayout/components/listDisplayBox";
import Deposit from "./components/Deposit";
import Vote from "./components/Vote";
import MobileBar from "../../layouts/purseLayout/components/MobileBar"

const PurseActions = ({theme, activeTab, setActiveTab}) => {
  return (
    <div className="w-full">
      <LisplayBox />
      <MobileBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Deposit />
      <Vote  />
    </div>
  );
};

export default PurseActions;
