import React from "react";
import LisplayBox from "../../layouts/purseLayout/components/listDisplayBox";
import Details from "./components/Details";
import MobileBar from "../../layouts/purseLayout/components/MobileBar"

const Purse = ({activeTab, setActiveTab}) => {
  return (
    <div className="w-full">
      <LisplayBox />
      <MobileBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Details />
    </div>
  );
};

export default Purse;
