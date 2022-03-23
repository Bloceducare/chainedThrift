import React from "react";
import LisplayBox from "../../layouts/purseLayout/components/listDisplayBox";
import Deposit from "./components/Deposit";
import Vote from "./components/Vote";

const PurseActions = () => {
  return (
    <div className={`w-full dark:bg-dark-1 bg-white-1 h-3/4 text-white-1 px-8`}>
      <LisplayBox />
      <Deposit  />
      <Vote  />

      {/* <!-- Create Purse Modal --> */}

    </div>
  );
};

export default PurseActions;
