import React from "react";
import Details from "./components/Details";

const Purse = ({member}) => {
  return (
    <div className="w-full">
      <Details member={member} />
    </div>
  );
};

export default Purse;
