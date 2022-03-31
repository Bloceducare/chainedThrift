import React from "react";
import MobileBar from "../../layouts/purseLayout/components/MobileBar"
import LisplayBox from "../../layouts/purseLayout/components/listDisplayBox";

const PurseSettings = ({activeTab, setActiveTab}) => {
  return (
    <div className="w-full">
      <LisplayBox />
      <MobileBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <p className="md:text-8xl mt-8 text-2xl text-white-1">Comming soon...</p>
    </div>
  );
};

export default PurseSettings;
