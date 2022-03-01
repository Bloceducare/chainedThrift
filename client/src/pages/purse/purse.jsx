import React from "react";
import LisplayBox from "../../layouts/purseLayout/components/listDisplayBox";
import Details from "./components/Details";

const Purse = () => {
  return (
    <div className="w-full bg-dark-1 h-3/4 text-white-1 px-8">
      <LisplayBox />
      <Details />
    </div>
  );
};

export default Purse;
