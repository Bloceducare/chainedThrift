import React from "react";

const PurseInfoBox = ({ icon:Icon, dataKey, dataValue }) => {

  return (
    <div className = "flex flex-col items-center justify-center h-auto p-2 bg-right bg-no-repeat bg-cover border bg-overlay-purse md:h-28 bg-pallet-3 sm:py-4 md:py-2 rounded-xl md:rounded-2xl border-purple-1 sm:flex-row">
      <Icon className = "block text-2xl md:text-3xl lg:text-5xl lg:mr-4" />
      <div className = "text-center sm:ml-4 sm:text-center md:text-center">
        <span className = "block text-xs text-white-1 Poppins md:text-xl">{dataKey}</span>
        <span className = "block text-xs font-light text-white-1 Poppins">{dataValue}</span>
      </div>
    </div>
  );
};

export default PurseInfoBox;
